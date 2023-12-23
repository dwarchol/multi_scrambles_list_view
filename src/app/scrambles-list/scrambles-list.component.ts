import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scrambles-list',
  templateUrl: './scrambles-list.component.html',
  styleUrls: ['./scrambles-list.component.css']
})
export class ScramblesListComponent {
  @Input() scrambles!:Array<string>;
}
