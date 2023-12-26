import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  inputScramble = "";
  set_title_value = "";
  table_size_value = 7;
  moves = [""];

  public getData(value: string, table_size: string, set_title: string): void {
    this.inputScramble = value;
    this.table_size_value = Number(table_size);
    this.set_title_value = set_title;
    this.moves = this.inputScramble.split(/\r?\n/);
  }
}
