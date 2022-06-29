import { Component, ElementRef,  HostListener,  Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {


  public navActive: boolean;
  public themeActive: boolean;
  

@ViewChild('header') header?: ElementRef;
@ViewChild('wallet') wallet?: ElementRef;

@ViewChild('themeBtn') themeBtn?: ElementRef;

 

constructor(@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) { 

  }

  ngOnInit(): void { 

    this.themeBtns();

    this.changeFontSize();

    this.dropdown();
 
  }

  /* =========== OPEN NAV =========== */
  openNav():void {
    this.navActive= true;
  }

  /* =========== CLOSE NAV =========== */
  closeNav():void {
    this.navActive= false; 
  }

  /* =========== OPEN BTN THEME =========== */
openTheme():void {
  this.themeActive= true;
}

  /* =========== CLOSE BTN THEME =========== */
closeTheme():void {
  this.themeActive= false;
}

  /* =========== CUSTOM FONT SIZE =========== */
removeFontSelector():void {
  const fontSize = this.document.querySelectorAll(".selector .selector__span");

  fontSize.forEach(size => {
    size.classList.remove("selector__span--active");
  })
}

  changeFontSize():void {
    const fontSize = this.document.querySelectorAll(".selector .selector__span");
    const html = this.document.querySelector("html");
    let fsize:string;


    fontSize.forEach(font => {
      
      font.addEventListener('click', () => {
    
        this.removeFontSelector();
      font.classList.toggle("selector__span--active");
        if(font.classList.contains('selector__1')) {
            fsize = '12px';
        } else if(font.classList.contains('selector__2')) {
            fsize= "14px";
        }
        else if(font.classList.contains('selector__3')) {
            fsize= "16px";
        } 
        else if(font.classList.contains('selector__4')) {
            fsize= "18px";
        }
  
        html.style.fontSize= fsize;
      });

   
    });
  }

  /* =========== CUSTOM COLOR =========== */
  changeActiveColor(): void {
    const colorOption = this.document.querySelectorAll('.color__container span');
  
    colorOption.forEach(colorCurrent => {
      colorCurrent.classList.remove("color__span--active");
    });
  
  }

  @HostListener('click', ['$event'])
  changeColor(): void {
    const colorOption = this.document.querySelectorAll('.color__container span');
    const root = this.document.querySelector<HTMLElement>(":root");
    
    colorOption.forEach(select => {
        select.addEventListener("click", () => {

          let colorChange:any;
          this.changeActiveColor();
          if(select.classList.contains("color__span--1")) {
              colorChange ='252';
          } else if(select.classList.contains("color__span--2")) {
            colorChange= '52';
          } else if(select.classList.contains("color__span--3")) {
              colorChange= '352';
          } else if(select.classList.contains("color__span--4")) {
            colorChange= '152';
          }


          select.classList.add('color__span--active');
          root?.style.setProperty('--primary-color-hue', colorChange);
        });

    });
  }

 /* =========== CUSTOM BACKGROUND =========== */
  themeBtns():void {
        const btn = this.document.querySelectorAll('.theme-btn');
  
        for(let i =0; i< btn.length; i++)

        btn[i].addEventListener("click", () => {

          document.body.classList.toggle('light-theme');
          document.body.classList.toggle('dark-theme');
          btn[i].classList.toggle('light');
          btn[i].classList.toggle('dark');
        });
}

 /* =========== CUSTOMNAV =========== */
 @HostListener('window:scroll', ['$event']) 
 customNav():void {

  const scrollNav = this.header?.nativeElement;
  const scrollA = this.wallet.nativeElement;
  if (this.document.body.scrollTop > 20 || this.document.documentElement.scrollTop > 20) {
    this.renderer2.addClass(scrollNav,'custom-nav');
    this.renderer2.addClass(scrollA, "custom-a");
  } else {
    this.renderer2.removeClass(scrollNav, 'custom-nav');
    this.renderer2.removeClass(scrollA, 'custom-a');
  }
  
 }


  /* =========== DROPDOWN =========== */


    dropdown():void {
  
      const option = this.document.querySelectorAll(".nav__a--submenu");
      const mediaSize: number = 768;
  
      for(let i=0; i<option.length; i++) {
        option[i].addEventListener("click", function(this: any) {
         //only responsive
          if(window.innerWidth <= mediaSize) {
              const submenu= this.nextElementSibling;
              const height = submenu.scrollHeight;
  
              if(submenu.classList.contains("d-show")) {
                submenu.classList.remove("d-show");
                submenu.removeAttribute("style");
              } else {
                submenu.classList.add('d-show');
                submenu.style.height = height + "px"
              }
          }
        });
      }
    }
  

 
}



