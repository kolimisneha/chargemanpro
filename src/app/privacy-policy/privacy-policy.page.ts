import { Component, OnInit } from '@angular/core';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {
  sourcePage: any;
  policyPoints: any = [];
  policyPoint2Heading: string;
  policyPoints2: any = [];
  policyPoint3Heading: string;
  policyPoints3: any = [];
  policyPoint4Heading: string;
  policyPoints4: any = [];
  policyPoint5Heading: string;
  policyPoints5: any = [];
  policyPoint6Heading: string;
  policyPoints6: any = [];
  constructor(private utils: Utils) { }

  ngOnInit() {
  this.policyPoints = [];
  this.policyPoint2Heading =  '';
  this.policyPoints2 = [];
  this.policyPoint3Heading = '';
  this.policyPoints3 = [];
  this.policyPoint4Heading = '';
  this.policyPoints4 = [];
  this.policyPoint5Heading = '';
  this.policyPoints5 = [];
  this.policyPoint6Heading = '';
  this.policyPoints6 = [];
  this.sourcePage = this.utils.getPageParams().sourcePage;
  }

  ionViewDidEnter() {
    this.policyPoints = constants.PRIVACY_POLICY_POINTS;

   
  }


}
