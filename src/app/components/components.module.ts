import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//COMPONENTS
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { CollectionCardComponent } from './collection-card/collection-card.component';



@NgModule({
  declarations: [
    NopagesfoundComponent,
    CollectionCardComponent,
  
 
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NopagesfoundComponent,
   
  ],
  providers:[ 
  
  ]
})
export class ComponentsModule { }
