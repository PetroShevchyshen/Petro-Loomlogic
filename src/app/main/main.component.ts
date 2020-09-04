import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {
  showInformBlock: boolean;
  card: Array<string>;

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
    this.card = this.user.getUser();
    this.showInformBlock = this.user.showInformBlock;
  }
}

