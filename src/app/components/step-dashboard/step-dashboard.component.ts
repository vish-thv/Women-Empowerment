import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-dashboard',
  templateUrl: './step-dashboard.component.html',
  styleUrls: ['./step-dashboard.component.css']
})
export class StepDashboardComponent implements OnInit {

  navigation: boolean = true

  constructor() { }

  ngOnInit(): void {
    this.toggleNavigation()
  }

  toggleNavigation(): void {
    let style = document.createElement('style')
    if(!this.navigation)
      style.innerHTML = '.navigation-title { width: 250px; }'
    else style.innerHTML = '.navigation-title { width: 0px; }'

    document.head.appendChild(style)
    this.navigation = !this.navigation
  }
}
