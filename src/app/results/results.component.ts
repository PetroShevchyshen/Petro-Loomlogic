import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {

  constructor(private router: Router) { }
  userCard = JSON.parse(localStorage.getItem('user'));
  userName = '';
  userEmail = '';
  userPhone = '';
  userImage = {};
  randomNumber = '';
  resultsWrapper = false;
  answer = true;


  goToInformationPage() {
    this.router.navigate(['/information']);
  }
  ngOnInit(): void {

    if (localStorage.length !== 0) {
      this.resultsWrapper = true;
      this.answer = false;
      this.userName = this.userCard.name;
      this.userEmail = this.userCard.email;
      this.userPhone = this.userCard.phone;
      this.userImage = this.userCard.image;
      this.randomNumber = (Math.random() * 100).toFixed(0);
    }
  }

}
