import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.sidebar();
  }

  /* ============= SIDEBAR - SECTION ============= */
  sidebar():void {
    const titles = document.querySelectorAll('.faqs__content .faqs__h2');
    const sidebarTitle = document.querySelectorAll<HTMLElement>(".sidebar__container .sidebar__a");


    const observer= new IntersectionObserver((entries, obj) => {
        entries.forEach((entry:any) => {
            if(entry.isIntersecting) {
              const id = 'faqs/#' + entry.target.id;
       
              history.pushState({}, entry.target.innerText, id);


               sidebarTitle.forEach(ele => {

                ele.classList.remove('sidebar__a--isActive')
                  const att= ele.getAttribute('data-title');
                
                  if(att == entry.target.innerText) {
                    ele.classList.add('sidebar__a--isActive')
                  }
               });

            }
        });
    }, {
      threshold: 1,
      rootMargin: '0px 0px -50% 0px'
    });

    titles.forEach(title => {
      observer.observe(title)
    });

  }

  inView(e: HTMLElement):void {
      e.scrollIntoView({ behavior: "smooth", block: "start", inline: "start"});
  }

}
