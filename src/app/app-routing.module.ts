import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//COMPONENTS
import { InicioComponent } from './home/inicio/inicio.component';
import { FaqsComponent } from './home/faqs/faqs.component';
import { ContactComponent } from './home/contact/contact.component';

import { NopagesfoundComponent } from './components/nopagesfound/nopagesfound.component';
import { CollectionsModule } from './collections/collections.module';
import { BlogRoutingModule } from './blog/blog-routing.module';
import { CollectionsRoutingModule } from './collections/collections-routing.module';

const routes: Routes = [
 
  { path: '', component: InicioComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'blog/article/:id', component: ArticleComponent },
  { path: '**',  component: NopagesfoundComponent },

  { path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule) },

  { path: 'sources', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }

];




@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}),
    CollectionsRoutingModule,
    BlogRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
