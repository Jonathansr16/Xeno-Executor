import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { HomedataService, gallery } from '@services/homedata.service';
@Component({
  selector: 'app-collection-detail',
  templateUrl: './collection-detail.component.html',
  styleUrls: ['./collection-detail.component.scss']
})
export class CollectionDetailComponent implements OnInit {



  public active: boolean = false;
  public statusActive: boolean = true;
  public priceActive: boolean = true;
  private isValidNumbers = "^[0-9]{1,3}$|^[0-9]{1,3}\.[0-9]{1,3}$";


  collection: any = {};

  authCollection: gallery[] = [];

  //Form Price
  formPrices: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
 
    private homeData: HomedataService,
    private fb: FormBuilder
  ) {

    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.collection = this.homeData.getGallery(params['id'])
    );

    this.authCollection = this.homeData.getGalleries();
  }




  get valueMaxValid() {
    return this.formPrices.get('valueMax').invalid && this.formPrices.get('valueMax').dirty && this.formPrices.get('valueMax').touched;
  }

  get valueMinValid() {
    return this.formPrices.get('valueMin').invalid && this.formPrices.get('valueMin').dirty && this.formPrices.get('valueMin').touched;
  }


  //BTN DROPDOWN
  statusBtn(): void {
    this.statusActive = !this.statusActive;
  }

  priceBtn(): void {
    this.priceActive = !this.priceActive;
  }

  authDropdown(): void {
    this.active = !this.active;
  }

  createForm() {

    this.formPrices = this.fb.group({
      valueMax: ['', [Validators.pattern(this.isValidNumbers)]],
      valueMin: ['', [Validators.pattern(this.isValidNumbers)]]
    });
  }

  save() {
    console.log(this.formPrices.value);
  }

}
