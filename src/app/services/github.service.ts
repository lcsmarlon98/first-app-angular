import { Injectable } from '@angular/core';
import { GithubHttpInterface } from '../interfaces/github-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements GithubHttpInterface {

  headers;

  constructor(private http: HttpClient) { 
    this.headers = {
      'User-Agent': 'Awesome-Octocat-App',
      'Authorization': `Bearer ${variables.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  }

  getUsers(): HttpClient {
    throw new Error('Method not implemented.');
  }

  getUserByUsername(): HttpClient {
    throw new Error('Method not implemented.');
  }
}
