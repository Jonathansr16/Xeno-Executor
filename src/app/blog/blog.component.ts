import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import {  Entry } from 'contentful'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

 posts$: Entry<any>[];
  constructor(private contenFulService: ContentfulService) { }

  


  ngOnInit(): void {

    this.contenFulService.getPosts().then(posts => this.posts$ = posts);
    this.contenFulService.getInformation()
  }

  

}
