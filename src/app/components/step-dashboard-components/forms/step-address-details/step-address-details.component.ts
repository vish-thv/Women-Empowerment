import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-address-details',
  templateUrl: './step-address-details.component.html',
  styleUrls: ['./step-address-details.component.css']
})
export class StepAddressDetailsComponent implements OnInit {

  // @ts-ignore
  addressDetails: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressDetails = this.formBuilder.group({
      State:['', [Validators.required]],
      City:['', [Validators.required]],
      District:['', [Validators.required]],
      Pincode:['', [Validators.required]],
      Address:['', [Validators.required]]
    })
  }

  saveAddressDetails(): void {
    console.log(this.addressDetails.value)
  }

}
