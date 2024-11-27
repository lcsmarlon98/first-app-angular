import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubApiService } from '../../services/github.service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  username?:string

  constructor(private route: ActivatedRoute, private http: GithubApiService) {}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username') || ""

    this.http.getUserByUsername(this.username).subscribe((res) => {
      console.log('todos: ',res)
    }, (error: any) => console.error(error))
  }

}
