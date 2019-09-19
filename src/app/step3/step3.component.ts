import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
 
/*Declear a FormGroup to validate and error checking */
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';

  validation_messages = {
    'select': [
      { type: 'required', message: 'Please select your option to proceed.' },
    ],
 
  };

  constructor(private formBuilder: FormBuilder) { }

  
    /* A select drop-dont FormControl is created to be validated. */
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      select: new FormControl('', Validators.compose([
        Validators.required,
  
      ])),
    },

    );

  }

}
