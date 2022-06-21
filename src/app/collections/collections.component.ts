import { Component, OnInit } from '@angular/core';
import { HomedataService, galleries } from '../services/homedata.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {


  data: galleries[] = [];

  constructor(private blogData: HomedataService) { }

  ngOnInit(): void {

   this.data= this.blogData.getGalleries();
  }

}
