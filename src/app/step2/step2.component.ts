import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

    /*Declear a FormGroup to validate and error checking */
  validations_form: FormGroup;
  errorMessage = '';
  successMessage = '';

  validation_messages = {
    'rating': [
      { type: 'required', message: 'Select a number from 1-5.' },
    ],
 
  };

  constructor(private formBuilder: FormBuilder) { }

    /* A bar-rating FormControl is created to be validated. */
  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      rating: new FormControl('', Validators.compose([
        Validators.required,
  
      ])),
    },

    );

  }

}
