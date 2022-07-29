import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraineeService } from 'src/app/services/trainee/trainee.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  // @ts-ignore
  stepLogin: FormGroup
  loginErrorMessage: string = ''

  // @ts-ignore
  stepRegister: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder, private traineeService: TraineeService) { }

  ngOnInit(): void {
    // initialize step login form
    this.stepLogin = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.stepRegister = this.formBuilder.group({
      FullName: ['', [Validators.required]],
      Username: ['',[Validators.required]],
      DateOfBirth: ['', Validators.required],
      Contact: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    console.log(this.stepLogin.value)
  }

  register(): void {
    console.log(this.stepRegister.value)
  }

}
