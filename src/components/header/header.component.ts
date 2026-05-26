import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: any = '';
  @Input() iconPath: any;
  @Input() redirectTo: any = '';
  @Input() secondaryIconPath: any = '';
  @Input() ionicIconPath: any = '';
  @Input() ionicIconName: any = '';
  @Output() onSecondaryIconClick: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private navCtrl: NavController, private routerSnapshot: ActivatedRoute) { }



  ngOnInit() {}

  backButtonClickHander () {
    if(this.redirectTo === 'login') {
        this.navCtrl.navigateBack('');
    } else if(this.redirectTo === 'chargemen-list') {
        this.navCtrl.navigateBack('/pages/sidemenu/imchargeman')
    }else if(this.redirectTo === 'chargemen-details') {
      this.navCtrl.navigateBack('/pages/sidemenu/imchargeman/host-details-tabs')
    }else if(this.redirectTo === 'profile-terms-privacy'){
      this.navCtrl.navigateBack('profile');
    }else if(this.redirectTo === 'support-terms') {
      this.navCtrl.navigateBack('/pages/sidemenu/support');
    }else if(this.redirectTo === 'reports') {
      this.navCtrl.navigateBack('/pages/sidemenu/reports');
    }else {
      this.navCtrl.navigateBack('/pages');
    }

  }


  secondaryIconClickHandler() {
    this.onSecondaryIconClick.emit();
  }

}
