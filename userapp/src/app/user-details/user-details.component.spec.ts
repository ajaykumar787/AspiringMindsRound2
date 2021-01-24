import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserDetailsComponent 
      ],
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        PanelModule,
        MessageModule,
        ToastModule,
        HttpClientModule
      ],
      providers: [
        PrimeNGConfig,
        MessageService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create UserDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    component.userDetailsForm.controls.name.setValue('');
    component.userDetailsForm.controls.gender.setValue('');
    component.userDetailsForm.controls.age.setValue('');
    component.userDetailsForm.controls.panNo.setValue('');
    component.userDetailsForm.controls.passportNo.setValue('');
    component.userDetailsForm.controls.currency.setValue('');
    expect(component.userDetailsForm.valid).toBeFalsy();
  });

  it('Full Name required field validity with blank string value', () => {
    const fullName = component.userDetailsForm.controls.name;
    expect(fullName.valid).toBeFalsy();

    fullName.setValue('');
    expect(fullName.hasError('required')).toBeTruthy();
  });

  it('Full Name pattern field validity with invalid value as "Ajay 1234"', () => {
    const fullName = component.userDetailsForm.controls.name;
    expect(fullName.valid).toBeFalsy();

    fullName.setValue('Ajay 1234');
    expect(fullName.hasError('pattern')).toBeTruthy();
  });

  it('Full Name required field validity with valid value as "Ajay Kumar"', () => {
    const fullName = component.userDetailsForm.controls.name;
    expect(fullName.valid).toBeFalsy();

    fullName.setValue('Ajay Kumar');
    expect(fullName.valid).toBeTruthy();
  });
  
  it('Gender required field validity with blank string value', () => {
    const gender = component.userDetailsForm.controls.gender;
    expect(gender.valid).toBeFalsy();

    gender.setValue('');
    expect(gender.hasError('required')).toBeTruthy();
  });

  it('Gender required field validity with valid value as "Male"', () => {
    const gender = component.userDetailsForm.controls.gender;
    expect(gender.valid).toBeFalsy();

    gender.setValue('Male');
    expect(gender.valid).toBeTruthy();
  });

  it('Age required field validity with blank string value', () => {
    const age = component.userDetailsForm.controls.age;
    expect(age.valid).toBeFalsy();

    age.setValue('');
    expect(age.hasError('required')).toBeTruthy();
  });

  it('Age pattern field validity with invalid value as "qw"', () => {
    const age = component.userDetailsForm.controls.age;
    expect(age.valid).toBeFalsy();

    age.setValue('qw');
    expect(age.hasError('pattern')).toBeTruthy();
  });

  it('Age min field validity with invalid value as "0"', () => {
    const age = component.userDetailsForm.controls.age;
    expect(age.valid).toBeFalsy();

    age.setValue('0');
    expect(age.hasError('min')).toBeTruthy();
  });

  it('Age max field validity with invalid value as "100"', () => {
    const age = component.userDetailsForm.controls.age;
    expect(age.valid).toBeFalsy();

    age.setValue('100');
    expect(age.hasError('max')).toBeTruthy();
  });

  it('Age required field validity with valid value within range 1 - 99', () => {
    const age = component.userDetailsForm.controls.age;
    expect(age.valid).toBeFalsy();

    age.setValue('99');
    expect(age.valid).toBeTruthy();
  });

  it('PAN Number required field validity with blank string value', () => {
    const panNo = component.userDetailsForm.controls.panNo;
    expect(panNo.valid).toBeFalsy();

    panNo.setValue('');
    expect(panNo.hasError('required')).toBeTruthy();
  });

  it('PAN Number pattern field validity with invalid value as "23ZAABN18J"', () => {
    const panNo = component.userDetailsForm.controls.panNo;
    expect(panNo.valid).toBeFalsy();

    panNo.setValue('23ZAABN18J');
    expect(panNo.hasError('pattern')).toBeTruthy();
  });

  it('PAN Number required field validity with valid value as "BNZAA2318J"', () => {
    const panNo = component.userDetailsForm.controls.panNo;
    expect(panNo.valid).toBeFalsy();

    panNo.setValue('BNZAA2318J');
    expect(panNo.valid).toBeTruthy();
  });


  it('Passport Number required field validity with blank string value', () => {
    const passportNo = component.userDetailsForm.controls.passportNo;
    expect(passportNo.valid).toBeFalsy();

    passportNo.setValue('');
    expect(passportNo.hasError('required')).toBeTruthy();
  });

  it('Passport Number pattern field validity with invalid value as "12096457"', () => {
    const passportNo = component.userDetailsForm.controls.passportNo;
    expect(passportNo.valid).toBeFalsy();

    passportNo.setValue('12096457');
    expect(passportNo.hasError('pattern')).toBeTruthy();
  });

  it('Passport Number required field validity with valid value as "A2096457"', () => {
    const passportNo = component.userDetailsForm.controls.passportNo;
    expect(passportNo.valid).toBeFalsy();

    passportNo.setValue('A2096457');
    expect(passportNo.valid).toBeTruthy();
  });

  it('Curreny required field validity with blank string value', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('');
    expect(currency.hasError('required')).toBeTruthy();
  });

  it('Curreny pattern field validity with invalid value as "11.501"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('11.501');
    expect(currency.hasError('pattern')).toBeTruthy();
  });

  it('Curreny pattern field validity with invalid value as "2.23332"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('2.23332');
    expect(currency.hasError('pattern')).toBeTruthy();
  });

  it('Curreny pattern field validity with invalid value as "3.5"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('3.5');
    expect(currency.hasError('pattern')).toBeTruthy();
  });

  it('Curreny required field validity with valid value as "123.12"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('123.12');
    expect(currency.valid).toBeTruthy();
  });  

  it('Curreny required field validity with valid value as "92929292929292.12"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('92929292929292.12');
    expect(currency.valid).toBeTruthy();
  }); 

  it('Curreny required field validity with valid value as "3.50"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('3.50');
    expect(currency.valid).toBeTruthy();
  });

  it('Curreny required field validity with valid value as "56754"', () => {
    const currency = component.userDetailsForm.controls.currency;
    expect(currency.valid).toBeFalsy();

    currency.setValue('56754');
    expect(currency.valid).toBeTruthy();
  });

  it('should set submitted to true', () => {
    component.onSubmit("form");
    expect(component.submitted).toBeTruthy();
  });
});
