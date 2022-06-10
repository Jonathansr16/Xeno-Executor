import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTS
import { ArticleComponent } from './article/article.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    ArticleComponent,
    NopagesfoundComponent,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ArticleComponent,
    NopagesfoundComponent
  ]
})
export class ComponentsModule { }
