import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  increment: number = 0;
  intervalId: any = null;
  allNumbers: number[] = [];
  renderEven: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.increment += 1;
    }, 500)
  }

  pauseGame() {
    clearInterval(this.intervalId);
    this.allNumbers.push(this.increment);
  }
}
