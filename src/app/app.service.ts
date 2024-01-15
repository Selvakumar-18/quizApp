import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiURL = 'assets/question.json'

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.apiURL)
  }
}
