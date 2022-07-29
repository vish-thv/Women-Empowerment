import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'step-dashboard',
  templateUrl: './step-dashboard.component.html',
  styleUrls: ['./step-dashboard.component.css']
})
export class StepDashboardComponent implements OnInit {

  navigation: boolean = true

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.toggleNavigation()

    // check if user is login

    // if not login
    // this.router.navigate(['home', 'step'])
  }

  toggleNavigation(): void {
    let style = document.createElement('style')
    if(!this.navigation)
      style.innerHTML = '.navigation-title { width: 200px; }'
    else style.innerHTML = '.navigation-title { width: 0px; }'

    document.head.appendChild(style)
    this.navigation = !this.navigation
  }
}


