import {TestBed, async} from '@angular/core/testing';

import {Module} from '../../module';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(done => {
    TestBed.configureTestingModule({
      imports: [Module],
    });

    TestBed.compileComponents().then(done);
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
