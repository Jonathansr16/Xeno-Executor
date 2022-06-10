import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//SERVICES
import { BlogdataService, Articles } from 'src/app/services/blogdata.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  article: any;

  constructor( private activatedRoute: ActivatedRoute, private blogDataService: BlogdataService ) { 

    this.activatedRoute.params.subscribe(p => {
     
      this.article = this.blogDataService.getArticle(p['id']);
    });

  }

  ngOnInit(): void {
  }

}
