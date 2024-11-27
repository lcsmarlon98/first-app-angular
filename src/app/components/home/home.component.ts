import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../../services/github.service';
import { GithubUserInterface } from '../../interfaces/github-user.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allUsers: GithubUserInterface[] = []

  constructor (
    private http: GithubApiService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe((res: GithubUserInterface[]) => {
      this.allUsers = res
      console.log(this.allUsers)
    }, (error: any) => console.error(error))
  }
  
  searchUser(username: HTMLInputElement) {
    this.router.navigateByUrl(`/search/${username.value}`);
  }
}
