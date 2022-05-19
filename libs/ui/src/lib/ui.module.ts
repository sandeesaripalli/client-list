import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule,CommonModule],
  declarations: [SearchbarComponent, CardComponent],
  exports: [SearchbarComponent, CardComponent],
})
export class UiModule {}
