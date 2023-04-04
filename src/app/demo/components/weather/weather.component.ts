import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";
import {take} from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [WeatherService],
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeatherConditions().pipe(take(1)).subscribe(res => {
      console.log(res);
    });
  }

}
