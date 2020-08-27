import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})

export class ResultsComponent implements OnInit {
  public card: Array<Text>;
  public resultsWrapper = false;

  constructor(
    private router: Router,
    private user: UserServiceService) { }

  goToInformationPage(): void {
    this.router.navigate(['/information']);
  }

  ngOnInit(): void {
    if (localStorage.length !== 0) {
      this.resultsWrapper = true;
      this.card = this.user.getUser();
    }
  }
}
