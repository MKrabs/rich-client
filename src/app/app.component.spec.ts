import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { anything, instance, mock, verify, when } from 'ts-mockito';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  class SomeService {
    someFunction(): boolean {
      return true;
    }

    someOtherFunction(lala: string): string {
      return 'foo';
    }
  }

  const someServiceMock = mock(SomeService);
  const someServiceInstance = instance(someServiceMock);

  when(someServiceMock.someFunction()).thenReturn(false);
  when(someServiceMock.someOtherFunction(anything())).thenReturn('bar');

  verify(someServiceMock.someFunction()).once();

  verify(someServiceMock.someOtherFunction('test123')).once();

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
