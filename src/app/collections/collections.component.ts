import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomedataService, gallery } from '@services/homedata.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {


  data: gallery[] = [];
  termino: string;
  valor_Filter:string= '';


  constructor(private dataService: HomedataService, 
              private router: Router, 
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

   this.data= this.dataService.getGalleries();
  //  this.activatedRouter.params.subscribe( params=> {
  //     this.termino= params['termino'];
  //     this.data= this.dataService.searchCollection( params['termino']);
  //     console.log(this.data);
  //  })
  }

 handlerSearch(value: string) {
    this.valor_Filter=  value;
 }




}
