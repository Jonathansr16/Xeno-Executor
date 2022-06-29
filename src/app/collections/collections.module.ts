//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionsRoutingModule } from './collections-routing.module';

//COMPONENTS
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionsComponent } from './collections.component';



@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollectionsRoutingModule,
  
  ], 
})
export class CollectionsModule { }
