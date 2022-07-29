import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-family-details',
  templateUrl: './step-family-details.component.html',
  styleUrls: ['./step-family-details.component.css']
})
export class StepFamilyDetailsComponent implements OnInit {

  // @ts-ignore
  familyDetails: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.familyDetails = this.formBuilder.group({
      MotherName:['', [Validators.required]],
      MotherDesignation:['', [Validators.required]],
      FatherName:['', [Validators.required]],
      FatherDesignation:['', [Validators.required]],
      HusbandName:[''],
      NumberOfChildren:['']
    })
  }

  saveFamilyDetails(): void {
    console.log(this.familyDetails.value)
  }

}
