import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {

 /*Declear a FormGroup to validate and error checking */
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';

  validation_messages = {
    'radio': [
      { type: 'required', message: 'Field required to be answered.' },
    ],
 
  };

  constructor(private formBuilder: FormBuilder) { }

  /* A radio-button FormControl is created to be validated. */
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      radio: new FormControl('', Validators.compose([
        Validators.required,
  
      ])),
    },

    );

  }

}
