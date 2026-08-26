import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';
import * as constants from '../../../constants';

@Component({
  selector: 'app-addchargerdetails',
  templateUrl: './addchargerdetails.page.html',
  styleUrls: ['./addchargerdetails.page.scss'],
})
export class AddchargerdetailsPage implements OnInit {

  mapPinIcon = '../../../assets/icon/map_pin.svg';
  rupeeIcon = '../../../assets/icon/rupee.svg'
  chargeDatePickerIcon: string = '../../../assets/icon/charge_date_picker.svg';
  pageParams: any;
  title: string;
  navigateBackTo:string;
  buttonText: string;
  type: string;
  coordinates: any = '';
  isDetailsSubmitting: any = false;
  chargeStationForm: FormGroup;
  userDetails: any;
  isLoading: boolean;
  statusText: string = '';
  pageDetails: any;
  isReadOnly: boolean = false;
  isFullDay: boolean = false;
  selectedStartTime: string = '';
  selectedEndTime: string = '';
  isTimesValid: boolean = false;
  showProgress: boolean = true;
  setFormReset: boolean = false;
  isCommercial: boolean = true;
  isRateReadOnly: boolean = false;
  protocolType: string = "";
  powerType:string = "";
  selectedCapacityType: string = "";
  selectedCapacityCountryList: any = []
  selectedCountryCapacities: any = [];
  selectedCapacity: string = "";
  capacityCountry:string = "";
  connectorcountval: string = "0";
  chargerTypesResponse: any = [];
  action_sheet_options = {
    header: 'Connectors Count',
    subHeader: 'Please select atleast one value',
  };
  action_sheet_capacity_types = {
    header: 'Type of charger',
    subHeader: 'Please select atleast one value'
  }
  connectorCount:any = [
    {
      val:1,
      connector_id:1
    },
    {
      val:2,
      connector_id:2
    }, 
    {
      val:3,
      connector_id:3
    },
    {
      val:4,
      connector_id:4
    }]
  constructor(private utils: Utils, private diagnostics: Diagnostic, private formBuilder: FormBuilder, private chargemanreq: ChargemanRequestService, private scanner: BarcodeScanner) { }

  ngOnInit() {
    this.pageParams = this.utils.getPageParams() || '';
    // fetching capacity types json array
    this.isLoading = true;
    this.statusText = constants.DISPLAY_MESSAGES.LOADING_CHARGER_TYPE_DETAILS;
    this.showProgress = true;
    this.chargemanreq.getRequestDetails(constants.RELATIVE_URLS.GET_CHARGER_TYPES).subscribe((res: any) => {
      this.showProgress = false;
      console.dir(res);
      this.chargerTypesResponse = res.chargerTypes;
    }, (err) => {
      this.showProgress = false;
      this.isLoading = true;
      this.statusText = constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR;
    })
    this.utils.getStoredUserDetails().then((res) => {
      this.userDetails = res;
    })
    console.dir(this.pageParams);
    if(this.pageParams?.type === constants.KEYS.TYPE_EDIT_VAL) {
      this.title = constants.DISPLAY_MESSAGES.CHARGER_EDIT_TITLE;
      this.navigateBackTo = 'chargemen-details';
      this.buttonText = constants.DISPLAY_MESSAGES.CHARGER_EDIT_BUTTON_TEXT;
      this.type = constants.KEYS.OPERATION_TYPE_EDIT
      this.statusText = constants.DISPLAY_MESSAGES.CHARGE_STATION_LOADING_TEXT;
      this.pageDetails = this.pageParams.chargerDetails;
      this.isRateReadOnly = this.pageDetails.chargeCount === '1' ? true : false;
      this.isLoading = false;
      this.isReadOnly = true;
      this.isTimesValid = true;
    } else {
      this.title = constants.DISPLAY_MESSAGES.CHARGER_ADD_TITLE;
      this.navigateBackTo = 'chargemen-list';
      this.buttonText = constants.DISPLAY_MESSAGES.CHARGER_ADD_BUTTON_TEXT;
      this.type = constants.KEYS.OPERATION_TYPE_ADD; 
      this.isLoading = false;
      this.pageDetails = '';
      this.isReadOnly = false; 
    }
    
    this.chargeStationForm = this.formBuilder.group({
      deviceid: [this.pageDetails?.deviceid, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(constants.REGEX.CHAR_NUM_PATTERN)])],
      devicename: [this.pageDetails?.hostname, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern(constants.REGEX.CHAR_NUM_PATTERN_SPACE)])],
      locationname: [this.pageDetails?.hostaddress, Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(constants.REGEX.ADDRESS_REGEX_PATTERN)])],
      registerType: [this.pageDetails?.chargettype,Validators.required],
      protocolType: [this.pageDetails?.devicetype,Validators.required],
      noofconnectors: [this.pageDetails?.connectorid, Validators.required],
      capacity_type: [this.pageDetails?.capacity, Validators.required],
      capacity_country: [Validators.required],
      capacity_value: [Validators.required],
      rate: [this.pageDetails?.rph,Validators.compose([Validators.required, Validators.maxLength(2), Validators.pattern(constants.REGEX.AMOUNT_REGEX_PATTERN)])],
      starttime: [this.pageDetails?.startime, Validators.required],
      endtime: [this.pageDetails?.endtime, Validators.required],
      active: [this.pageDetails?.active === '1' ? true : false],
      fullday: [this.pageDetails?.fullday === '1' ? true : false]
    })

    if(this.pageDetails?.chargettype && this.pageDetails?.chargettype !== 'commercial') {
      this.isCommercial = false;
      this.isFullDay = true;
    }
   
  }

  ionViewDidEnter() {
    if(this.pageParams?.type === constants.KEYS.TYPE_EDIT_VAL) { 
      this.chargeStationForm.get('protocolType').clearValidators();
      this.chargeStationForm.get('protocolType').updateValueAndValidity();
      this.chargeStationForm.get('noofconnectors').clearValidators();
      this.chargeStationForm.get('noofconnectors').updateValueAndValidity();
      this.chargeStationForm.get('capacity_type').clearValidators();
      this.chargeStationForm.get('capacity_type').updateValueAndValidity();
      this.chargeStationForm.get('capacity_country').clearValidators();
      this.chargeStationForm.get('capacity_country').updateValueAndValidity();
      this.chargeStationForm.get('capacity_value').clearValidators();
      this.chargeStationForm.get('capacity_value').updateValueAndValidity();
      this.protocolType = this.pageDetails?.devicetype ?? "";
      this.connectorcountval = this.pageDetails?.connectorid ?? "0";
      this.selectedCapacityType = this.pageDetails?.capacity;
      this.capacityCountry = this.pageDetails?.country ?? "india";
      this.selectedCapacity = this.pageDetails?.devicekw;

      this.chargeStationForm.get('protocolType').patchValue(this.protocolType);
      this.chargeStationForm.get('noofconnectors').patchValue(this.connectorcountval);
      this.chargeStationForm.get('capacity_type').patchValue(this.selectedCapacityType);
      this.chargeStationForm.get('capacity_country').patchValue(this.capacityCountry);
      this.chargeStationForm.get('capacity_value').patchValue(this.selectedCapacity);
    }
 
    this.utils.getCoordinates(constants.KEYS.DIALOG_TEXT_TYPE_LOAD).then((res: any) => {

      if(res.status === 'granted') {
        this.coordinates = {latitude: res.coords.latitude, longitude: res.coords.longitude}
      } else {
        this.coordinates = ''
      }
    });

    this.diagnostics.registerLocationStateChangeHandler((status) => {

        if(status !== this.diagnostics.locationMode.LOCATION_OFF) {
              if(this.isDetailsSubmitting) {
                this.addEditChargerHandler();
              }
        } else {
          this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_PROMPT,constants.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE, constants.DISPLAY_MESSAGES.ALERT_LOCATION_ENABLE_ERR_MESSAGE, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL])
          .then((res) => {
            if(res === 1) {
              this.utils.openNativeSettings('location')
            }
        })
      }
    })
   
  }

  onCapacityTypeChange(event) {

    let data = [...this.chargerTypesResponse];
    let selected_type_children: any = data.filter((_data) => {
      return _data.name.toLowerCase() === this.selectedCapacityType.toLowerCase();
    })
    this.selectedCapacityCountryList = selected_type_children[0].children
    this.capacityCountry = "";
    this.selectedCapacity = ""
  
  }

  onCapacityCountryChange(event) {
    // if(event.target.value !== this.capacityCountry) {
    let data = [...this.selectedCapacityCountryList];
    let selected_capacities_: any = data.filter((_data) => {
      return _data.type.toLowerCase() === this.capacityCountry.toLowerCase();
    })
   
    this.selectedCountryCapacities = selected_capacities_[0].kw
  //}
  }

  onCapacityValChange(event) {
    // console.log("selected capacity "+this.selectedCapacity);

    // console.log("Selected type "+this.selectedCapacityType);
    // console.log("Selected capacity country "+this.capacityCountry);
    // console.log("Selected capacity val "+this.selectedCapacity);
  }


  ionViewWillEnter() {
    
  }


  onProtocolChangeEvent(event) {
  
  }

  onPowerTypeChange(event) {
    this.powerType = event.target.value;
  } 



  addEditChargerHandler() {
   
    if(this.coordinates === '') {
      this.utils.getCoordinates(constants.KEYS.DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT).then((res) => {
          if(res.status === 'granted') {
            this.isDetailsSubmitting = true;
            this.coordinates = {latitude: res.coords.latitude, longitude: res.coords.longitude}
            this.submitChargeStationDetails();
          } 
      })
    } else {
      this.isDetailsSubmitting = true;
      this.submitChargeStationDetails();
    }
    
  }

async submitChargeStationDetails() {
    let relativeUrl: string = '';
    
    let chargeStationFormDetails = {
      "mobile" : this.userDetails.mobile,
      "deviceid": this.chargeStationForm.value.deviceid,
      "deviceparent": this.chargeStationForm.value.deviceid,
      "hostname": this.chargeStationForm.value.devicename,
      "connectorid":this.chargeStationForm.value.noofconnectors,
      "hostaddress": this.chargeStationForm.value.locationname,
      "latlong": this.coordinates.latitude.toString()+","+this.coordinates.longitude.toString(),
      "chargettype": this.chargeStationForm.value.registerType,
      "devicetype":this.chargeStationForm.value.protocolType,
      "rph": this.isCommercial ? this.chargeStationForm.value.rate : '0',
      "startime": this.isFullDay ? '' : this.chargeStationForm.value.starttime,
      "endtime": this.isFullDay? '' : this.chargeStationForm.value.endtime,
      "capacity": this.chargeStationForm.value.capacity_type,
      "country": this.chargeStationForm.value.capacity_country,
      "devicekw":this.chargeStationForm.value.capacity_value,
      "active": this.chargeStationForm.value.active == true ? '1' : '0',
      "fullday": this.chargeStationForm.value.fullday == true ? '1' : '0'
    }
    this.isLoading = true;
    
    let successMessage: any = '';
    if(this.pageParams?.type === constants.KEYS.TYPE_EDIT_VAL) {
      this.statusText = constants.DISPLAY_MESSAGES.CHARGE_STATION_UPDATE_REQ;
      const json_details = {"modifiedby": this.userDetails.name};
      chargeStationFormDetails = { ...chargeStationFormDetails, ...json_details}
      relativeUrl = 'updateChargeMan';
      successMessage = constants.DISPLAY_MESSAGES.CHARGE_STATION_UPDATE_SUC;
      this.setFormReset = false;
    } else {
      this.statusText = constants.DISPLAY_MESSAGES.CHARGE_STATION_ADD_REQ;
      this.setFormReset = true;
      const json_details = {"createdby": this.userDetails.name};
      chargeStationFormDetails = { ...chargeStationFormDetails, ...json_details}
      relativeUrl = 'insertChargeMan';
      successMessage = constants.DISPLAY_MESSAGES.CHARGER_ADD_SUCCESS
    }

    // changes on 22/02/2024 regarding looping on connectors
    let conn_count = parseInt(this.chargeStationForm.value.noofconnectors);
    console.log(conn_count);
    let count = 1;
    for(let i=0; i<conn_count; i++) {
      
      if(conn_count > 1) {
        chargeStationFormDetails = {...chargeStationFormDetails, "deviceid":`${this.chargeStationForm.value.deviceid}-${i+1}`, "connectorid":`${i+1}`}
      }
    this.chargemanreq.postRequestDetails(relativeUrl, chargeStationFormDetails).subscribe(async (res:any) => {
      this.isLoading = false;
      this.isDetailsSubmitting = false;
      this.coordinates = ''
      if(res.status === constants.KEYS.CHARGER_ADD_SUCCESS_STATUS && conn_count == i+1) {
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.SUCCESS_DIALOG_TITLE, successMessage, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK]).then((res) => {
        })
          this.setFormReset ? this.chargeStationForm.reset() : '';
          if(!this.setFormReset) {
            this.utils.navigateTo(constants.KEYS.NAV_FORWARD, "/pages/sidemenu/imchargeman");
          }
      } else if(res.status === constants.KEYS.CHARGER_ERR_STATUS_ALRDY_EXISTS) {
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.CHARGER_ALREADY_EXISTS_1+ ' ' +this.chargeStationForm.value.deviceid+' '+constants.DISPLAY_MESSAGES.CHARGER_ALREADY_EXISTS_2, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        this.chargeStationForm.get('deviceid').setValue(null);
        return
      }
      
    }, (err) => {
       this.isLoading = false;
        this.isDetailsSubmitting = false;
        this.coordinates = ''
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
        return

    })
  }
  }


  onFullDayChangeHandler(event) {

    this.isFullDay = event.target.checked 
    if(this.isFullDay) {
      this.isTimesValid = true;
      this.chargeStationForm.get('starttime').clearValidators();
      this.chargeStationForm.get('endtime').clearValidators();
      this.chargeStationForm.get('starttime').updateValueAndValidity();
      this.chargeStationForm.get('endtime').updateValueAndValidity();
    } else {
      this.chargeStationForm.get('starttime').setValidators([Validators.required]);
      this.chargeStationForm.get('endtime').setValidators([Validators.required]);
      this.chargeStationForm.get('starttime').updateValueAndValidity();
      this.chargeStationForm.get('endtime').updateValueAndValidity();
    }
  }

  onConnectorValChange(event) {
   
  }
  
  openTimePicker(type) {
    this.utils.presentDateTimePicker('time', true, 'HH:mm').then((val) => {
      if(type === 'start') {
        this.selectedStartTime = val;
        this.chargeStationForm.get('starttime').setValue(this.selectedStartTime);
      } else {
        this.selectedEndTime = val;
        this.chargeStationForm.get('endtime').setValue(this.selectedEndTime);
      }
      if(this.getTimeValidityStatus()) {
        this.isTimesValid = true;
      } else {
        this.isTimesValid = false;
        if(this.chargeStationForm.get('starttime').value !== null && this.chargeStationForm.get('endtime').value !== null) {
        this.utils.displayDialog(constants.KEYS.DIALOG_TYPE_ALERT, constants.DISPLAY_MESSAGES.ERR_DIALOG_TITLE, constants.DISPLAY_MESSAGES.DATE_ERROR, [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OK])
        }
      }
    })
    
  }


  onChargeTypeChangeHandler(eve) {
  if(eve.target.value === 'commercial') {
    this.isCommercial = true;
    this.isFullDay = false;
    this.chargeStationForm.get('starttime').setValidators([Validators.required]);
    this.chargeStationForm.get('endtime').setValidators([Validators.required]);
    this.chargeStationForm.get('rate').setValidators([Validators.required, Validators.maxLength(2), Validators.pattern(constants.REGEX.AMOUNT_REGEX_PATTERN)]);
    this.chargeStationForm.get('starttime').updateValueAndValidity();
    this.chargeStationForm.get('endtime').updateValueAndValidity();
    this.chargeStationForm.get('rate').updateValueAndValidity();
  } else {
    this.isCommercial = false;
    this.isFullDay = true;
    this.isTimesValid = true;
    this.chargeStationForm.get('starttime').clearValidators();
    this.chargeStationForm.get('endtime').clearValidators();
    this.chargeStationForm.get('rate').clearValidators();
    this.chargeStationForm.get('starttime').updateValueAndValidity();
    this.chargeStationForm.get('endtime').updateValueAndValidity();
    this.chargeStationForm.get('rate').updateValueAndValidity();
  }

  }

  getTimeValidityStatus() {
    if(this.chargeStationForm.get('starttime').value !== null && this.chargeStationForm.get('endtime').value !== null) {
     return this.utils.validateTime(this.chargeStationForm.get('starttime').value, this.chargeStationForm.get('endtime').value,'HH:mm');
    }
  }

  openQRScanner() {
    const barcodeOptions = {
      formats: 'QR_CODE',
      disableSuccessBeep: true,
    }
    this.scanner.scan(barcodeOptions).then((scanData) => {

      if(!scanData.cancelled) { 
        this.chargeStationForm.get('deviceid').setValue(scanData.text);
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




}
