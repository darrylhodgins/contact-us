import {
  AbstractControl,
  AsyncValidatorFn,
  Validator,
  Validators,
  ValidatorFn,
} from '@angular/forms';

import {Observable} from 'rxjs';

export type ValidationResult = {[validator: string]: string | boolean};

export type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;

export type ValidatorArray = Array<Validator | ValidatorFn>;

const normalizeValidator =
    (validator: Validator | ValidatorFn): ValidatorFn | AsyncValidatorFn => {
  const func = (validator as Validator).validate.bind(validator);
  if (typeof func === 'function') {
    return (c: AbstractControl) => func(c);
  } else {
    return <ValidatorFn | AsyncValidatorFn> validator;
  }
};

const composeValidators =
    (validators: ValidatorArray): AsyncValidatorFn | ValidatorFn => 
  validators == null || validators.length === 0
    ? null
    : Validators.compose(validators.map(normalizeValidator));
    
const combineResults = (...results: Array<ValidationResult>): ValidationResult =>
  results.every(r => r == null)
    ? null
    : Object.assign({}, ...results);

export const validate =
    (validators: ValidatorArray, asyncValidators: AsyncValidatorArray) => {
  return (control: AbstractControl) => {
    const synchronousValid = () => composeValidators(validators)(control);

    if (asyncValidators) {
      const asyncResult = composeValidators(asyncValidators)(control);
      
      return asyncResult.map(result => combineResults(result, synchronousValid()));
    }

    return validators
      ? Observable.of(synchronousValid())
      : Observable.of(null);
  };
};

export const message = (validator: ValidationResult, key: string): string => {
  switch (key) {
    case 'required':
      return 'Please enter a value';
    case 'pattern':
      return 'Value does not match required pattern';
    case 'minlength':
      return 'Value must be N characters';
    case 'maxlength':
      return 'Value must be a maximum of N characters';
  }

  switch (typeof validator[key]) {
    case 'string':
      return <string> validator[key];
    default:
      return `Unknown validator ${key}`;
  }
};

