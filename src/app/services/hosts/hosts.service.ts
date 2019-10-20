import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HostsService {

  urlToJson = '../../../assets/json/Frontend_Test_SRP_Payload.json';

  constructor(public http: HttpClient) {
  }

  async getHosts() {
    const response = await this.http.get<any>(this.urlToJson).toPromise();
    return response;
  }

}
