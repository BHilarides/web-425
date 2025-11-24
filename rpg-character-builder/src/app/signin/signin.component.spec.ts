import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Router, ActivatedRoute } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

import { SigninComponent } from './signin.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../auth.service';

import { of } from 'rxjs';

class MockAuthService {
  signin(email: string, password: string): boolean {
    return true;
  }

  getAuthState() {
    return of(false);
  }

  signout() {}
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {

    const activatedRouteMock = {
      snapshot: {
        queryParamMap: {
          get: (key: string) => {
            if (key === 'returnUrl') {
              return '/create-character';
            }
            return null;
          }
        }
      }
    }
    await TestBed.configureTestingModule({
      imports: [SigninComponent, RouterTestingModule, ReactiveFormsModule], providers: [{ provide: AuthService, useClass: MockAuthService },{ provide: ActivatedRoute, useValue: activatedRouteMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signin method on form submit', () => {
    const signinSpy = spyOn((component as any).authService, 'signin').and.callThrough();
    component.signinForm.controls['email'].setValue('test@example.com');
    component.signinForm.controls['password'].setValue('Password123');
    component.signin();
    expect(signinSpy).toHaveBeenCalledWith('test@example.com', 'Password123');
  });
});
