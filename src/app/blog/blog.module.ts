import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';

//MODULE
import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownPipe } from '../pipes/markdown.pipe';


@NgModule({
  declarations: [
    BlogComponent,
    ArticleComponent,
    MarkdownPipe
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
