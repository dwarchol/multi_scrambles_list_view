import { Component, Input } from '@angular/core';
import { Cube } from '../cube';

@Component({
  selector: 'app-u-side',
  templateUrl: './u-side.component.html',
  styleUrls: ['./u-side.component.css']
})

export class USideComponent {
  @Input() scramble!: string;
  cube = new Cube();
  sp_scramble = [""];
  ngOnInit(){
    this.sp_scramble = this.scramble.replaceAll("'", "p").split(" ");
    this.sp_scramble.shift();
    console.log(this.sp_scramble)

    this.sp_scramble.forEach(move => {
      this.cube.move(move);
    });

  }
}

