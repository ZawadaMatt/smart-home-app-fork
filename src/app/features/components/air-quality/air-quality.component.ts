import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "./air-quality.service";
import {AirQualityResponse} from "./AirQualityResponse";

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  providers: [AirQualityService],
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent implements OnInit {

  res: AirQualityResponse | undefined;

  constructor(private airQualityService: AirQualityService) {
  }

  ngOnInit(): void {
    this.getAirQuality();
    console.log(this.res?.city);
  }

  getAirQuality(): void {
    this.airQualityService.getCurrentAirQuality().subscribe((data: AirQualityResponse) => {
      this.res = {...data};
    });
  }

}
