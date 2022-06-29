import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomedataService, gallery } from '@services/homedata.service';
@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {



  public active: boolean = false;

  collection:any= {};
  
  authCollection: gallery[] = [];

  constructor(private activatedRoute: ActivatedRoute, 
              private homeData: HomedataService,
            
             ) {

   
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>  this.collection= this.homeData.getGallery(params['id']) 
      );

      this.authCollection= this.homeData.getGalleries();
    }


  authDropdown():void {

    this.active= !this.active;
  }

}
