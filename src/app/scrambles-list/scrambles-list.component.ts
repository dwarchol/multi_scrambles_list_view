import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scrambles-list',
  templateUrl: './scrambles-list.component.html',
  styleUrls: ['./scrambles-list.component.css']
})
export class ScramblesListComponent {
  @Input() scrambles!:Array<string>;
  @Input() table_size:number = 3;

  splited_scrambles: Array<Array<string>> = [];

  ngOnChanges(){
    this.splited_scrambles = [];

    while(this.scrambles.length){
      this.splited_scrambles.push(this.scrambles.splice(0,this.table_size))
    }
    if(this.splited_scrambles[0].length == 0){
      this.splited_scrambles.shift();
    }
  }
}
