import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { WeatherType } from '../services/weather.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})

export class ResultsComponent implements OnInit {
  showInformBlock: boolean;
  card: Array<string>;
  weather: WeatherType;
  loading = false;

  constructor(
    private router: Router,
    private user: UserServiceService,
    private weatherService: WeatherService) { }

  goToInformationPage(): void {
    this.router.navigate(['/information']);
  }

  clearStorage(): void {
    this.user.clearLocalStorage();
  }

  getWeather(): void {
    this.weatherService.getWeather()
      .subscribe(response => {
        this.weather = response;
        this.loading = true;
      });
  }

  ngOnInit(): void {
    this.user.checkStorage();
    this.card = this.user.getUser();
    this.showInformBlock = this.user.showInformBlock;
    this.getWeather();
  }
}
