import { DOCUMENT } from '@angular/common';
import { Component,  Inject,  OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { HomedataService, Nft, gallery } from '@services/homedata.service';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  
  nft: Nft[] = [];
  gallery: gallery[] = [];

  constructor(@Inject(DOCUMENT) private document: Document, private wowService: NgwWowService, 
    private homeService: HomedataService) { }

  ngOnInit(): void {

  

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
  
 
      this.CounterAnimation();

 
    }


  //RECORD
  CounterAnimation():void {
    const record = document.querySelectorAll('.benefits-record__h2 .benefits-record__span');
    const sidebarTitle = document.querySelectorAll<HTMLElement>(".sidebar__container .sidebar__a");


    const observer= new IntersectionObserver((entries, obj) => {
        entries.forEach((entry:any) => {
            if(entry.isIntersecting) {
            
              let target = +entry.target.dataset.number;
           let number= entry.target;
           

              setTimeout(() => {
                this.updateCount(number, target )
              }, 400);
            }
        });
    }, {
      threshold: .5,
      rootMargin: '0px 0px -50% 0px'
    });

    record.forEach(title => {
      observer.observe(title)
    });

  }

   updateCount= (num: any, maxNum: number) => {
    let currentNum = +num.innerText;
  
      if(currentNum < maxNum) {
        num.innerText = currentNum + 1;
  
        setTimeout(() => {
          this.updateCount(num, maxNum);
      }, 4);
      }
  }








}

