import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

//SERVICES

import { ContentfulService } from '@services/contentful.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  template: '<div [innerHTML]="somehtmlCode"> </div>',
  encapsulation: ViewEncapsulation.None,

  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  post$: Observable<any> | undefined;

  constructor( private activatedRoute: ActivatedRoute, private contentfulService: ContentfulService ) { 

  
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        const id = params['id'];
        this.post$= this.contentfulService.getPost(id);
      }
    )
  }

}
