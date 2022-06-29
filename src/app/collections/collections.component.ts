import { Component, OnInit } from '@angular/core';
import { HomedataService, gallery } from '@services/homedata.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {


  data: gallery[] = [];

  constructor(private blogData: HomedataService) { }

  ngOnInit(): void {

   this.data= this.blogData.getGalleries();
  }

}
