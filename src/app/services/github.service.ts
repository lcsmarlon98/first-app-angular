import { Injectable } from '@angular/core';
import { GithubHttpInterface } from '../interfaces/github-http.interface';
import { HttpClient } from '@angular/common/http';
import { variables } from './../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class GithubService implements GithubHttpInterface {
  
  headers;

  constructor(private http: HttpClient) { 
    this.headers = {
      'Authorization': `Bearer ${variables.token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  }

  getUsers() {
    return this.http.get(`${variables.urlBase}/users`, {
      headers: this.headers
    })
  }

  getUserByUsername() {
    throw new Error('Method not implemented.');
  }
}
