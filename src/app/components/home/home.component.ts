import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allUsers: GithubUserInterface[] = []

  constructor (private http: GithubService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe((res: GithubUserInterface[]) => {
      this.allUsers = res
      console.log(this.allUsers)
    }, (error: any) => console.error(error))
  }
  
}
