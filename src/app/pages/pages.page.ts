import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Authentication } from '../services/authentication.service';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(private navCtrl: NavController, private auth:Authentication, private navController: NavController, private utils: Utils, private appVersion: AppVersion) { }
  userName = '';
  menuAvatarIcon = '../../assets/icon/menu_item_avatar.svg';
  profileIcon = '../../assets/icon/profile_short_icon.svg';
  logoutIcon = '../../assets/icon/logout.svg';
  appVersionNumber: string;
  menuItems = [
    {
      title: 'Business host',
      url: 'imchargeman',
      icon: '../../assets/icon/menu-arrow.svg'
    },
    {
      title: 'KYC',
      url: 'kyc-details',
      icon: '../../assets/icon/menu-arrow.svg'
    },
    {
      title: 'Wallet',
      url: 'wallet',
      icon: '../../assets/icon/menu-arrow.svg'
    },
    {
      title: 'Withdraw',
      url: 'withdraw',
      icon: '../../assets/icon/menu-arrow.svg'
    },
    {
      title: 'Charge Transactions',
      url: 'history',
      icon: '../../assets/icon/menu-arrow.svg'
    },
    {
      title: 'Reports',
      url: 'reports',
      icon: '../../assets/icon/menu-arrow.svg'
    },
   
    // {
    //   title: 'Blogs',
    //   url: 'blogs',
    //   icon: '../../assets/icon/blogs.svg'
    // },
    {
      title: 'Support',
      url: 'support',
      icon: '../../assets/icon/support_mic.svg'
    }

  ]
  async ngOnInit() {
    this.appVersionNumber = await this.appVersion.getVersionNumber()
  }

  ionViewDidEnter() {
    this.utils.getStoredUserDetails().then((res) => {
      if(res && res !== false) {
      const userDetails = res
      this.userName = userDetails.name;
      if(parseInt(userDetails.chargeCount) > 0) {
        this.utils.updateValues(constants.KEYS.CHARGE_STATUS, true);
      } else {
        this.utils.updateValues(constants.KEYS.CHARGE_STATUS, false);
      }
      }
    });
    
  }

  routeTo(url) {
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD, '/pages/sidemenu/'+url);
  }

  openProfile() {
    this.navCtrl.navigateForward(['/profile'], {state: {'pageName': 'dashboard'}});
  }

  logout() {
    // this.utils.updateValues(constants.KEYS.CLEAR_SUB, true);
    this.auth.setLogout();
    this.utils.removeStoredDetails(constants.KEYS.USER_DETAILS);
    this.utils.removeStoredDetails(constants.KEYS.WALLET_BALANCE);
    this.utils.removeStoredDetails(constants.KEYS.NEARBY_CHARGE_STATIONS);
    this.utils.removeStoredDetails(constants.KEYS.IS_CHARGING);
    this.utils.removeStoredDetails(constants.KEYS.DEVICE_DETAILS);
    this.utils.ChargeStatusSubject.next('');
    this.navController.navigateRoot(['']);
  }
}
