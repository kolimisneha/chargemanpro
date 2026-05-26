import { Component, OnInit } from '@angular/core';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.page.html',
  styleUrls: ['./terms-and-conditions.page.scss'],
})
export class TermsAndConditionsPage implements OnInit {

  sourcePage: any;
  termsPoints: any = [];
  constructor(private utils: Utils) { }

  ngOnInit() {
    this.sourcePage = this.utils.getPageParams().sourcePage;
  }

  ionViewDidEnter() {
    this.termsPoints = constants.TERMS_AND_CONDITIONS;
  }

}
