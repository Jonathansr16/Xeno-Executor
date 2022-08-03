import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//COMPONENTS
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { NftCard } from './nft-card/nft-card.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    NopagesfoundComponent,
    NftCard,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    NopagesfoundComponent,
    NftCard,
    SearchComponent
  ],
  providers:[ 
  
  ]
})
export class ComponentsModule { }
