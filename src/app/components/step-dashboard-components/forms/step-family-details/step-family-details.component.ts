import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraineeFamilyDetailsService } from 'src/app/services/trainee-details/trainee-family-details.service';

@Component({
  selector: 'app-step-family-details',
  templateUrl: './step-family-details.component.html',
  styleUrls: ['./step-family-details.component.css']
})
export class StepFamilyDetailsComponent implements OnInit {

  // @ts-ignore
  familyDetails: FormGroup

  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private traineeFamilyDetailsService: TraineeFamilyDetailsService) { }

  ngOnInit(): void {
    this.getFamilyDetails()
    this.familyDetails = this.formBuilder.group({
      TraineeId: ['1', [Validators.required, Validators.pattern('[0-9]+')]],
      MotherName:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      MotherDesignation:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      FatherName:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      FatherDesignation:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      HusbandName:[''],
      NumberOfChildren:['']
    })
  }


  getFamilyDetails(): void {
    this.traineeFamilyDetailsService.getFamilyDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveFamilyDetails(): void {
    this.submitted=true;
    console.log(this.familyDetails.value)

    this.traineeFamilyDetailsService.postFamilyDetails(this.familyDetails.value).subscribe((d) => {
      console.log(d)
    })
  }

}
