import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  private readonly apiUrl = environment.weatherApi;
  private readonly city = 'Strzelin';
  private readonly apiKey = environment.weatherApiKey;

  getCurrentWeatherConditions(): Observable<any> {
    let queryParams = new HttpParams()
      .set('unitGroup', 'metric')
      .set('include', 'current')
      .set('key', this.apiKey);
    console.log(queryParams);
    return this.http.get(`${this.apiUrl}` + `${this.city}` + '/today', {params: queryParams});
  }

}
