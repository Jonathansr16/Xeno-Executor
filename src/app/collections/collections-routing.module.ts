import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';
import { CollectionsComponent } from './collections.component';
import { NftDetailComponent } from './nft-detail/nft-detail.component';
import { SearchComponent } from '@components/search/search.component';
const collections: Routes = [
    { path: 'collections', component: CollectionsComponent },
    { path: 'collections/:id', component: CollectionDetailComponent },
    { path: 'collections/:idNft', component: NftDetailComponent },
    { path: 'buscar/:termino', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(collections)],

})
export class CollectionsRoutingModule { }
