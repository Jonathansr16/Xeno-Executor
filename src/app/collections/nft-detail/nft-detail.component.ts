import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomedataService, gallery } from '@services/homedata.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.scss']
})
export class NftDetailComponent implements OnInit {

  nft: any;

  constructor(private activatedRouter: ActivatedRoute, private home: HomedataService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => this.nft= this.home.getGallery(params['idNft']))
  }

}
