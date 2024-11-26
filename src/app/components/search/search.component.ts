import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username')
    console.log(username)
  }

}
