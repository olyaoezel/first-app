import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-subscriptions',
  templateUrl: './new-subscriptions.component.html',
  styleUrls: ['./new-subscriptions.component.css']
})
export class NewSubscriptionsComponent implements OnInit {
  currentDate = new Date();
  randomNumber = Math.floor(Math.random() * 100);
  
  constructor() { }

  ngOnInit(): void {
  }

}
