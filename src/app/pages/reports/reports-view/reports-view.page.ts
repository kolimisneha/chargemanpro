import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { map } from 'rxjs/operators';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';
import * as constants from '../../../constants';
@Component({
  selector: 'app-reports-view',
  templateUrl: './reports-view.page.html',
  styleUrls: ['./reports-view.page.scss'],
})
export class ReportsViewPage implements OnInit {
  deviceId: string = "1234567890";
  totalPower: any = 0;
  totalEarnings: any = 0;
  chargemanAddress: any;
  pdfContainer: any;
  isDownload: boolean = false;
  @ViewChild('reportsView') reportsView: ElementRef;
  DeviceName: string;
  dev_Id: string;
  DeviceLoc: string;
  deviceDetails = "EVChargeman one two three four, 1234567890, Dno2 Madhapur Hyderabad Telangana";
  reportsHeading = ["Sno", "From", "To", "Pwr", "Earn", "Dur"]
  selectedDeviceId: string;
  frequency: string;
  isLoading: boolean = false;
  frequencyVal: string;
  showProgress: boolean = true;
  statusText: string;
  reportsData: any;
  reportGenDate: any;
  startDate: any;
  endDate: any;
  constructor(private screenOrientation: ScreenOrientation, private pdfGenerator: PDFGenerator, private utils: Utils, private chargemanApi: ChargemanRequestService) { }
  ngOnInit() {
    this.selectedDeviceId = this.utils.getPageParams().deviceid;
    this.frequency = this.utils.getPageParams().freq;
    this.frequencyVal = this.utils.getPageParams().freqVal;
    this.startDate = this.utils.getPageParams().from;
    this.endDate = this.utils.getPageParams().to;
    
  }
  ionViewWillEnter() {
  
    this.isLoading = true;
    this.showProgress = true;
    this.chargemanAddress = constants.CHARGEMAN_DETAILS.ADDRESS.split(',');
    this.DeviceName = this.deviceDetails.split(',')[0];
    this.dev_Id = this.deviceDetails.split(',')[1];
    this.DeviceLoc = this.deviceDetails.split(',')[2];
   //  this.screenOrientation.lock('landscape');
  }
  ngAfterViewInit() {
    this.pdfContainer = this.reportsView.nativeElement.innerHTML;
  }
  ionViewDidEnter() {
  // this.reportsData.map((data) => {
  //   this.totalPower += parseInt(data.power);
  //   this.totalEarnings += parseInt(data.earn);
  // })
  this.statusText = `${constants.DISPLAY_MESSAGES.FETCHING_REPORTS_1} ${this.selectedDeviceId} ${constants.DISPLAY_MESSAGES.FETCHING_REPORTS_2}`;
  let reportsBody;
  reportsBody = {
    "deviceid": this.selectedDeviceId,
    "type": this.frequencyVal,
  } 
  if(this.frequencyVal === 'custom') {
    reportsBody.startdate = this.startDate;
    reportsBody.enddate = this.endDate;
  }
  this.chargemanApi.postRequestDetails(constants.RELATIVE_URLS.GET_REPORTS, reportsBody).subscribe((res: any) => {
    console.dir(res);
    if(res.length > 0) {
      this.isLoading = false;
      this.DeviceName = res[0].hostname;
      this.DeviceLoc = res[0].hostaddress;
      this.reportGenDate = this.utils.convertDateTimeFormat(res[0].currentTime, "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm");
       res.map((item) => {
        item.consumewallet = parseFloat(item.consumewallet).toFixed(2);
        item.duration = item.duration !== null ? this.utils.convertDateTimeFormat(item.duration, "HH:mm:ss", "HH:mm") : '-';
        item.pwr = parseFloat(item.pwr).toFixed(2);
        item.starttime = item.starttime !== null ? this.utils.convertDateTimeFormat(item.starttime,"YYYY-MM-DD HH:mm:ss","DD/MM/YYYY hh:mm") : '-';   
        item.endtime = item.endtime !== null ? this.utils.convertDateTimeFormat(item.endtime,"YYYY-MM-DD HH:mm:ss","DD/MM/YYYY hh:mm") : '-';
        this.totalPower += parseFloat(item.pwr); 
        this.totalEarnings +=parseFloat(item.consumewallet);
      });
      this.totalPower = this.totalPower.toFixed(2);
      this.totalEarnings = this.totalEarnings.toFixed(2);
      this.reportsData = res;
    } else {
      this.isLoading = true;
          this.showProgress = false;
          this.statusText = `${constants.DISPLAY_MESSAGES.NO_REPORTS_FOUND_1} ${this.selectedDeviceId} ${constants.DISPLAY_MESSAGES.NO_CHARGE_STATIONS_FOUND_2}`;
    }
  }, (err) => {
    this.isLoading = true;
    this.showProgress = false;
    this.statusText = constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
  })

  }
  ionViewWillLeave() {
    
    this.screenOrientation.unlock();
  }
  

 async downloadReports() {
    this.isDownload = true;
    this.pdfContainer = this.reportsView.nativeElement.innerHTML;
    console.dir(this.pdfContainer);
    let options = {
      documentSize: 'A4',
      type: 'share',
      fileName: 'report_'+this.selectedDeviceId
      }
    let pdfgen = await this.pdfGenerator.fromData(this.pdfContainer,options);
  }

}
