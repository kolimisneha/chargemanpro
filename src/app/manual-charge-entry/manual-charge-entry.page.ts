import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { KEYS, DISPLAY_MESSAGES } from '../constants';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { NavigationExtras } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-manual-charge-entry',
  templateUrl: './manual-charge-entry.page.html',
  styleUrls: ['./manual-charge-entry.page.scss'],
})
export class ManualChargeEntryPage implements OnInit {
  manualChargeForm: FormGroup;
  userDetails;
  scanIcon = "../../assets/icon/scan-circle-outline.svg"
  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController, private barcodeScanner: BarcodeScanner, private utils: Utils) {
    this.manualChargeForm = this.formBuilder.group({
      'deviceid': ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(constants.REGEX.CHAR_NUM_PATTERN)])]
    })
  }

  ngOnInit() {
  }
  onKeypress(event) {
    if (event.keyCode === 13) {
      this.validateDeviceId(event.target.value);
    }
  }
  submitDeviceId() {
    let deviceId = this.manualChargeForm.get('deviceid').value;
    this.validateDeviceId(deviceId);
  }

  validateDeviceId(deviceid) {
    this.modalCtrl.dismiss({
      id: deviceid
    })
  }

  async openQrScanner() {
    this.userDetails = await this.utils.getStoredUserDetails();
    if (parseInt(this.userDetails.chargeCount) > 0) {
      let rph = await this.utils.getStoredDetails(KEYS.DEVICE_DETAILS);
      this.userDetails.rph = JSON.parse(rph.value).rph ?? '0';
      // let chargeDurationTimer = await (await this.utils.getStoredDetails(KEYS.LAST_TRANSACTION_TIME)).value;

      // this.userDetails.transactionTimer = this.utils.convertSecondsToTime(chargeDurationTimer);
      this.utils.presentToast(constants.DISPLAY_MESSAGES.ALREADY_CHARGING_DEVICE_TEXT, [], 4000);
      const extras: NavigationExtras = {
        state: {
          charge_details: this.userDetails
        }
      }
      this.utils.navigateTo(KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', extras)
    } else {

      const barcodeOptions = {
        formats: 'QR_CODE',
        disableSuccessBeep: true,
        prompt: constants.DISPLAY_MESSAGES.QR_SCANNER_HINT,

      }
      this.barcodeScanner.scan(barcodeOptions).then((scanData) => {
        if (scanData.cancelled == false) {
          this.validateDeviceId(scanData.text);
        }

      }).catch((err) => {
        if (err === 'Illegal access') {
          this.utils.displayDialog(KEYS.DIALOG_TYPE_PROMPT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.CAMERA_ACCESS_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]).then((res) => {
            if (res === 1) {
              this.utils.openNativeSettings('application_details')
            }
          })
        } else {
          this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.SCAN_ERR, [DISPLAY_MESSAGES.BUTTON_TEXT_OK])
        }

      })
    }
  }

}
