import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})

export class ResultsComponent implements OnInit {
  showInformBlock: boolean;
  card: Array<Text>;

  constructor(
    private router: Router,
    private user: UserServiceService) { }

  goToInformationPage(): void {
    this.router.navigate(['/information']);
  }

  clearStorage(): void {
    this.user.clearLocalStorage();
  }

  ngOnInit(): void {
    this.user.checkStorage();
    this.card = this.user.getUser();
    this.showInformBlock = this.user.showInformBlock;
  }
}
