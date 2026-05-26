import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Utils } from 'src/app/services/utils.service';
import * as constants from '../../constants';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  scanIcon = "../../assets/icon/scan-circle-outline.svg"
  showDates: boolean = false;
  reportsForm:FormGroup;
  fromDate: string;
  toDate: string;
  minFromDate: string = "2021-01-01";
  maxFromDate: string;
  minToDate: string = "2021-01-01";
  maxToDate: string;
  currentDate: string;
  action_sheet_reports = {
    header: 'Report Frequency',
    subHeader: 'Please select atleast one value'
  }
  constructor(private formBuilder: FormBuilder, private utils: Utils, private barcodeScanner: BarcodeScanner) {
    this.reportsForm = this.formBuilder.group({
      deviceId: ['',Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(constants.REGEX.CHAR_NUM_PATTERN)])],
      frequency:['', Validators.compose([Validators.required])],
      fromDate: [],
      toDate: [],
    })
   }

  ngOnInit() {
    this.maxToDate = this.utils.getTodayDate();
    this.maxFromDate = this.utils.getTodayDate();  
    this.currentDate = this.utils.getCurrentDate("DD/MM/YYYY");
  }
  /**
   * To open the qr scanner
   */
  openQrScanner() {
    const barcodeOptions = {
      formats: 'QR_CODE',
      disableSuccessBeep: true,
      prompt: constants.DISPLAY_MESSAGES.QR_SCANNER_HINT,
      
    }
    this.barcodeScanner.scan(barcodeOptions).then((scanData) => {
      if(scanData.cancelled == false) { 
       this.reportsForm.controls['deviceId'].setValue(scanData.text);
      }

    }).catch((err) => {
      if(err === 'Illegal access') {
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE,constants.DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
          if(res === 1) {
            this.utils.openNativeSettings('application_details')
          }
        })
      }else {
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT,constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE,constants.DISPLAY_MESSAGES.SCAN_ERR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK])
      }
      
    })
  }

  /**
   * Triggered whenever the frequency value  was changed by user
   */
   onFrequencyChange(event) {
     let selectedVal = event.detail.value;
     if(selectedVal !== "custom") {
      this.showDates = false;
      this.reportsForm.get('fromDate').setValue("");
      this.reportsForm.get('toDate').setValue("");
      this.reportsForm.get('fromDate').clearValidators();
      this.reportsForm.get('toDate').clearValidators();
      this.reportsForm.get('fromDate').updateValueAndValidity();
      this.reportsForm.get('toDate').updateValueAndValidity();
     } else {
      this.showDates = true;
      this.reportsForm.get('fromDate').setValidators([Validators.required])
      this.reportsForm.get('toDate').setValidators([Validators.required])
      this.reportsForm.get('fromDate').updateValueAndValidity();
      this.reportsForm.get('toDate').updateValueAndValidity();
      
      
      
     }
   }

   getFromDate(event) {
    
    this.fromDate = event.target.value;
    if(this.fromDate !== '' || this.fromDate !== undefined) {
      this.minToDate = this.fromDate;
    }
   }

   getToDate(event) {
    
    this.toDate = event.target.value;
    if(this.toDate !== '' || this.toDate !== undefined) {
      this.maxFromDate = this.toDate;
    }
   }

   ionViewDidLeave() {
     this.reportsForm.reset();
   }

   openReportsView() {
     
     
     const frequencyVal = this.reportsForm.controls['frequency'].value;
     let transactionsText;
     switch(frequencyVal) {
       case 'today':
         transactionsText = this.utils.getTodayDate();
        break;
       case 'week': 
       transactionsText = '1 Week';
       break;
       case 'month': 
       transactionsText = '1 Month'
       break;
       case 'custom':
         transactionsText = this.utils.convertDateTimeFormat(this.reportsForm.controls['fromDate'].value, "YYYY-MM-DD", "DD-MM-YYYY") + " to "+this.utils.convertDateTimeFormat(this.reportsForm.controls['toDate'].value, "YYYY-MM-DD", "DD-MM-YYYY")
        break;
       default:
       break;
     }
     const deviceDetails: NavigationExtras = {
      state: {
        deviceid: this.reportsForm.controls['deviceId'].value,
        freq: transactionsText,
        freqVal: frequencyVal
      }
     }
     if(frequencyVal === 'custom') {
       deviceDetails.state.from = this.reportsForm.controls['fromDate'].value;
       deviceDetails.state.to = this.reportsForm.controls['toDate'].value;
     }
     //Navigate to -> 1-2 Navigate Navigate + data
     this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT,'/pages/sidemenu/reports/reports-view', deviceDetails);
   }
 
   
}
