import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Capacitor } from '@capacitor/core';
import { DISPLAY_MESSAGES, GRACIAS_DETAILS, KEYS } from 'src/app/constants';
import { Utils } from 'src/app/services/utils.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  chargemenEmail:string;
  chargemenContact: string;
  chargeManWebSite: string;
  constructor(private utils: Utils, private emailComposer: EmailComposer) { }

  ngOnInit() {
    this.chargemenEmail = GRACIAS_DETAILS.EMAIL_ADDRESS;
    this.chargemenContact = GRACIAS_DETAILS.CONTACT_NUMBER;
    this.chargeManWebSite = GRACIAS_DETAILS.WEBSITE;
  }
  openSupport(type) {
    if(type === 'call') {
      const mobileNumber = (this.chargemenContact.split('-')[1]+this.chargemenContact.split('-')[2]+this.chargemenContact.split('-')[3])
      this.utils.callNumber(mobileNumber)
    } else if(type === 'website') {
      this.utils.openWebSite(this.chargeManWebSite, KEYS.URL_TYPE_EXTERNAL);
    } else if (type === 'terms' || type === 'privacy') {
      const sourcePage = 'support-terms'
      const pageUrl = type === 'terms' ? '/terms-and-conditions' : '/privacy-policy';
      const extras: NavigationExtras = {
        state: {
          sourcePage: sourcePage
        }
      }
      this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT, pageUrl, extras);
    }else {
      this.utils.getStoredUserDetails().then((res) => {
        this.emailComposer.open({
          app:'mailto',
          to:this.chargemenEmail,
          subject:`${DISPLAY_MESSAGES.EMAIL_HEADER} ${res.name} (${res.mobile})`
        });
      })
      
    }
  } 

  

}
