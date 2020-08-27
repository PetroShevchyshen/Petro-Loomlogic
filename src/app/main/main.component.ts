import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})

export class MainComponent implements OnInit {
  card: Array<Text>;
  main = true;

  constructor(
    private router: Router,
    private user: UserServiceService) { }

  goToInformationPage(): void {
    this.router.navigate(['/information']);
  }

  ngOnInit(): void {
    if (localStorage.length !== 0) {
      this.main = false;
      this.card = this.user.getUser();
    }
  }
}
