import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediasService {

  API_URI = 'http://localhost:27100';

  constructor(private http: HttpClient) { }

  getMedias(){
    return this.http.get(`${this.API_URI}/media`)
  }
}
