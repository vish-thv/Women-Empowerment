import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'step-personal-details',
  templateUrl: './step-personal-details.component.html',
  styleUrls: ['./step-personal-details.component.css']
})

export class StepPersonalDetailsComponent implements OnInit {

  // @ts-ignore
  personalDetails: FormGroup

  MaritalStatus: string[] = ['Single', 'Married', 'Divorced', 'Widowed']
  category: string[] = ['ST/SC', 'OBC', 'General']
  disabilities: string[] = ['vision Impairment', 'deaf or hard of hearing','mental health conditions', 'intellectual disability', 'acquired brain injury', 'autism spectrum disorder' ,'physical disability']


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personalDetails = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Aadhaar: ['', [Validators.required]],
      Pan: ['', [Validators.required]],
      MaritalStatus: ['', [Validators.required]],
      Religion: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Pwd: ['', [Validators.required]],
      DisabilityType: ['', [Validators.required]]
    })
  }

  savePersonalDetails(): void {
    console.log(this.personalDetails.value)
  }

}
