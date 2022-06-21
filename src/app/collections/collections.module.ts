import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';

//COMPONENTS
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { NftDetailComponent } from './nft-detail/nft-detail.component';
import { CollectionsComponent } from './collections.component';


@NgModule({
  declarations: [
    CollectionsComponent,
    CollectionDetailComponent,
    NftDetailComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ], 
})
export class CollectionsModule { }
