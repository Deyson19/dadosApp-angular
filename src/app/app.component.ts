import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private currentImage = '../assets/img/dice1.png';
  ngOnInit(): void {
    this.diceLeft = this.currentImage;
    this.diceRight = this.currentImage;
  }
  title = 'dadosApp';

  public diceRight = '';
  public diceLeft = '';
  public youWinImage?: boolean;

  public num1: number = 0;
  public num2: number = 0;

  getImage(id: number): string {
    return `../assets/img/dice${id}.png`;
  }

  playDices() {
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.diceLeft = this.getImage(this.num1);
    this.num2 = Math.round(Math.random() * 5) + 1;
    this.diceRight = this.getImage(this.num2);

    if (this.num1 === this.num2) {
      this.youWinImage = true;
    }
  }
  reset() {
    this.youWinImage = false;
    this.num1 = 0;
    this.num2 = 0;
  }
}
