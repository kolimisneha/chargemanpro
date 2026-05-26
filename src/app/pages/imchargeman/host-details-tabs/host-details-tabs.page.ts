import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { DISPLAY_MESSAGES } from 'src/app/constants';

@Component({
  selector: 'app-host-details-tabs',
  templateUrl: './host-details-tabs.page.html',
  styleUrls: ['./host-details-tabs.page.scss'],
})
export class HostDetailsTabsPage implements OnInit {
  hostChargerTitle: string = '';
  setEdit:boolean;
  constructor() { }
  @ViewChild('chargerdetails') tabs: IonTabs;  

  ngOnInit() {
  }

  onTabChange(event) {
      if(this.tabs.getSelected() === 'charger-details') {
        this.hostChargerTitle =  DISPLAY_MESSAGES.CHARGER_DETAILS_HEADING
        this.setEdit = true;
      } else {
        this.hostChargerTitle = DISPLAY_MESSAGES.CHARGER_DETAILS_HISTORY;
        this.setEdit = false;
      }
  }
}
