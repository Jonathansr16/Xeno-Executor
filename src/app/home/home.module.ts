import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//COMPONENTS
import { InicioComponent } from './inicio/inicio.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    InicioComponent,
    FaqsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class HomeModule { }
