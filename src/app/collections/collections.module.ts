//MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//MODULES
import { CollectionsRoutingModule } from './collections-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';
//COMPONENTS
import { CollectionDetailComponent } from '@collections/collection-detail/collection-detail.component';
import { CollectionsComponent } from '@collections/collections.component';


import { ValueSearchPipe } from '@pipes/value-search.pipe';

@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,
    ValueSearchPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CollectionsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ], 

})
export class CollectionsModule { }
