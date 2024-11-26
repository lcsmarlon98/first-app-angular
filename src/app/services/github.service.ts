import { Injectable } from '@angular/core';
import { GithubHttpInterface } from '../interfaces/github-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements GithubHttpInterface {

  constructor(private http: HttpClient) { }

  getUsers(): HttpClient {
    throw new Error('Method not implemented.');
  }

  getUserByUsername(): HttpClient {
    throw new Error('Method not implemented.');
  }
}
