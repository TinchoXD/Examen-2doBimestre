import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<Object>;


  constructor() {
    this.users = [
    {id: 1, name: 'user1'},
    {id: 2, name: 'user2'},
    {id: 3, name: 'user3'},
    {id: 4, name: 'user4'},
    {id: 5, name: 'user5'},
    ]


}



  ngOnInit() {
  }

}
