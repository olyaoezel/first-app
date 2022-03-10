import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  guestName = '';
  value: number = 10;
  
  constructor() { }

  ngOnInit() {
  }

  greetGuest(event) {
    this.guestName = event.target.value;
}

}
