import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AirQualityResponse} from "../model/AirQualityResponse";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  constructor(private http: HttpClient) {

  }

  private readonly apiUrl = environment.airQualityApi;
  private readonly deviceID = 395

  getCurrentAirQuality(): Observable<AirQualityResponse> {
    return this.http.get<AirQualityResponse>(`${this.apiUrl}` + 'device/' + this.deviceID);
  }

}
