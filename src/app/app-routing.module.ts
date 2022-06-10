import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//COMPONENTS
import { InicioComponent } from './home/inicio/inicio.component';
import { FaqsComponent } from './home/faqs/faqs.component';
import { ContactComponent } from './home/contact/contact.component';
import { BlogComponent } from './home/blog/blog.component';
import { ArticleComponent } from './components/article/article.component';
import { NopagesfoundComponent } from './components/nopagesfound/nopagesfound.component';

const routes: Routes = [
 
  { path: '', component: InicioComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/article/:id', component: ArticleComponent },
  { path: '**',  component: NopagesfoundComponent },

];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
   
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
