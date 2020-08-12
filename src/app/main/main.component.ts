import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  main = true;
  localWrapper = false;
  userCard = JSON.parse(localStorage.getItem('user'));
  userName = '';
  userEmail = '';
  userPhone = '';
  userImage = {};
  randomNumber = '';
  constructor(private router: Router) {

  }
  goToInformationPage() {
    this.router.navigate(['/information']);
  }
  ngOnInit(): void {
    if (localStorage.length !== 0) {
      this.main = false;
      this.localWrapper = true;
      this.userName = this.userCard.name;
      this.userEmail = this.userCard.email;
      this.userPhone = this.userCard.phone;
      this.userImage = this.userCard.image;
      this.randomNumber = (Math.random() * 100).toFixed(0);
    }

  }
}
