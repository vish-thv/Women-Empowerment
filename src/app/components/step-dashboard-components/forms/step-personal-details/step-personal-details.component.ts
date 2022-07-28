import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-personal-details',
  templateUrl: './step-personal-details.component.html',
  styleUrls: ['./step-personal-details.component.css']
})
export class StepPersonalDetailsComponent implements OnInit {


  martialStatus: string[] = ['Single', 'Married', 'Divorced', 'Widowed']
  category: string[] = ['ST/SC', 'OBC', 'General']

  constructor() { }

  ngOnInit(): void {
  }

}
