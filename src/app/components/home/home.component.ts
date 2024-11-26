import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor (private http: GithubService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(res => console.log(res))
  }
  
}
