import { Injectable } from '@angular/core';
import { GithubHttpInterface } from '../interfaces/github-http.interface';
import { HttpClient } from '@angular/common/http';
import { variables } from './../enviroments/enviroment'
import { GithubUserInterface } from '../interfaces/github-user.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService implements GithubHttpInterface {
  
  headers;

  constructor(private http: HttpClient) { 
    this.headers = {
      'Authorization': `Bearer ${variables.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  }

  getUsers() {
    return this.http.get<GithubUserInterface []>(`${variables.urlBase}/users`, {
      headers: this.headers
    })
  }

  getUserByUsername(username: string) {
    throw new Error('Method not implemented.');
  }
}
