import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chargingdetails',
  templateUrl: './chargingdetails.page.html',
  styleUrls: ['./chargingdetails.page.scss'],
})
export class ChargingdetailsPage implements OnInit {

  start = true;
  stop = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  startcharging(){
    this.start = false;
    this.stop = true;
  }


}
