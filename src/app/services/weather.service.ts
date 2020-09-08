import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface WeatherType {
  location: {
    name: string;
  };
  current: {
    weather_icons: string[],
    temperature: number;
    weather_descriptions: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'http://api.weatherstack.com/current?access_key=b49483c21ea1e184c34ab82be1a7be80&query=vinnitsa';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get(this.url)
      .pipe(delay(500));
  }
}
