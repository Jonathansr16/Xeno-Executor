import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTS
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { ContentfulService } from '../services/contentful.service';


import { MarkdownPipe } from '../pipes/markdown.pipe';

@NgModule({
  declarations: [
 
    NopagesfoundComponent
 
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    NopagesfoundComponent
  ],
  providers:[ 
    ContentfulService
  ]
})
export class ComponentsModule { }
