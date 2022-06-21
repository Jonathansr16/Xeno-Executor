import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog.component';

const blog: Routes = [
  { path: 'sources/blog', component: BlogComponent },
    { path: 'sources/blog/article/:id', component: ArticleComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(blog)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
