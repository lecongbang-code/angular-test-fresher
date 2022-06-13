import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Question:any;
  constructor() {}

  ngOnInit(): void {
  }
  selectQuestion(i:number, name:string) {
    this.Question = {
      id:i,
      name: name,
    }
  }

}
