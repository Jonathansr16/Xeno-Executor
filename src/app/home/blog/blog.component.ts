import { Component, OnInit } from '@angular/core';
import { BlogdataService, Articles } from '../../services/blogdata.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Articles[] = [];

  constructor(private blogData: BlogdataService) { }

  ngOnInit(): void {
    this.articles= this.blogData.getArticles();
  }

}
