import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contextlabs-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent   {
 @Output() public filterText: EventEmitter<string> = new EventEmitter<string>();
  public filterBy="";

  public filter (){
    this.filterText.emit(this.filterBy)
  }

  
}
