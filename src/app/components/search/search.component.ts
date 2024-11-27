import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GithubApiService } from '../../services/github.service';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-search',
  imports: [RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  username?:string
  user?: GithubUserInterface

  constructor(private route: ActivatedRoute, private http: GithubApiService) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || ""

    this.http.getUserByUsername(this.username).subscribe((res: GithubUserInterface) => {
      this.user = res
      console.log(res)
    }, (error: any) => console.error(error))
  }

}
