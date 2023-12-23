import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  inputScramble = "";
  moves = [""];

  public getData(value: string): void {
    this.inputScramble = value;
    this.moves = this.inputScramble.split(/\r?\n/);
  }
}
