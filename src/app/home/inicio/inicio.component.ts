import { Component,  OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { HomedataService, Nft, galleries } from 'src/app/services/homedata.service';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  
  nft: Nft[] = [];
  gallery: galleries[] = [];

  constructor(private wowService: NgwWowService, 
    private homeService: HomedataService) { }

  ngOnInit(): void {

    this.filterGallery();

    this.wowService.init();

    const target = document.querySelector('.home-left__dinamic-text');

    
    const writer = new Typewriter(target, {
      loop: true, 
      typeSpeed: 150,
      deleteSpeed: 150,
      typeColor: '--color-primary',
      cursorColor: '--color-primary'
    });
    
    writer
      .strings(
        400,
        "Art",
        "Collections", 
        "Music",
        "Photography",
        "Sports",
        "Trading Cards",
        "utility", 
        "Virtual worlds"
      )
      .start()

      this.nft = this.homeService.getNFT();
      this.gallery = this.homeService.getGalleries();
  }

  filterGallery() {
    const filterContainer = document.querySelector<HTMLElement>('.filters');
    const btnFilters= filterContainer!.children;
    const totalFilterBtn = btnFilters!.length;
    const item = document.querySelectorAll("gallery__item");
    const totalItem = item.length;

   
  
    for( let i=0; i < totalFilterBtn; i++) 
    {
      btnFilters[i].addEventListener("click", function() 
      {

        if(filterContainer) {

          filterContainer.querySelector<HTMLElement>(".active-filter").classList.remove('active-filter');
        }
          btnFilters[i].classList.add('active-filter');
       
           const filterValue = btnFilters[i].getAttribute('data-filter');
         
             for(let k=0; k < totalItem; k++) 
             {
   
               
               if(filterValue == item[k].getAttribute("data-category")) 
               {
                 item[k].classList.remove("hidden");
                 item[k].classList.add("show");
                 console.log(filterValue)
               } else 
               {
                 item[k].classList.add("hidden");
                 item[k].classList.remove("show");
               }
               if(filterValue == "All")
                {
                 item[k].classList.remove("hidden");
                 item[k].classList.add("show");
               }
             }
        

    
      });
    }
  }

}
