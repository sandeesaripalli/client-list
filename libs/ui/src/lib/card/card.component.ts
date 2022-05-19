import { Component, Input } from '@angular/core';

@Component({
  selector: 'contextlabs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  {
  @Input() data!: any;
  activeClass = false;    

}
