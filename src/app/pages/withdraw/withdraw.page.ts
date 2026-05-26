import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { DISPLAY_MESSAGES, GRACIAS_DETAILS, KEYS, REGEX } from 'src/app/constants';
import { fromEvent } from 'rxjs';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { Capacitor } from '@capacitor/core';
import { Utils } from 'src/app/services/utils.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  withdrawForm: FormGroup;
  ifscStatusText: string;
  isIFSCProcessing: boolean = false;
  userDetails: any = '';
  walletBalance: any;
  isReadOnly: boolean = true;
  constructor(private formBuilder: FormBuilder, private chargeReq: ChargemanRequestService, private utils: Utils, private emailComposer:EmailComposer) { }

  ngOnInit() {
    this.getUserDetails();
    this.withdrawForm = this.formBuilder.group({
      acno: ['', Validators.compose([Validators.required, Validators.pattern(REGEX.BANK_ACCOUNT_NUMBER_REGEX)])],
      ifsc: ['', Validators.compose([Validators.required, Validators.pattern(REGEX.IFSC_REGEX)])],
      bname: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.pattern(REGEX.CHAR_NUM_PATTERN_SPACE)])],
      baddr: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      acname: ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.pattern(REGEX.ACCOUNT_NAME_REGEX)])],
      bbranch: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(REGEX.BRANCH_NAME_REGEX)])]
    })
  }

  async getUserDetails() {
    this.userDetails = await this.utils.getStoredUserDetails();
    this.walletBalance = await this.utils.getStoredDetails(KEYS.WALLET_BALANCE);
  }

  getBankDetailsByIFSC(event) {
    
   if(event.target.value.length >= 11 ) {
     this.ifscStatusText = DISPLAY_MESSAGES.IFSC_LOADING_DETAILS;
     this.isIFSCProcessing = true;
     this.chargeReq.getBankDetails(event.target.value).pipe(debounceTime(2000), distinctUntilChanged()).subscribe((res: any) => {
       this.isIFSCProcessing = false;
       this.isReadOnly = true;
       this.withdrawForm.get('bname').setValue(res.BANK);
       this.withdrawForm.get('baddr').setValue(res.ADDRESS);
       this.withdrawForm.get('bbranch').setValue(res.BRANCH);
     }, (err: any) => {
       this.isIFSCProcessing = false;
       if(!err.toLowerCase().includes('not found')) {
         this.ifscStatusText = DISPLAY_MESSAGES.IFSC_ERR
         this.isReadOnly = false;
       }
       this.withdrawForm.get('bname').setValue('');
       this.withdrawForm.get('baddr').setValue('');
       this.withdrawForm.get('bbranch').setValue('');
     })
   } else {
     this.isIFSCProcessing = false;
     this.withdrawForm.get('bname').setValue('');
     this.withdrawForm.get('baddr').setValue('');
     this.withdrawForm.get('bbranch').setValue('');
   }
  }

  subimtReq() {
    if(this.walletBalance.value === '0') {
      this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.DIALOG_TITLE_INFO,DISPLAY_MESSAGES.DIALOG_WITHDRAW_NO_BALANCE, [DISPLAY_MESSAGES.BUTTON_TEXT_OK]);
    } else {
   // const schema = Capacitor.getPlatform().toLowerCase() === 'android' ? 'com.google.android.gm' : Capacitor.getPlatform().toLowerCase() === 'ios' ? 'message://' : '';
    // this.emailComposer.isAvailable(schema).then((res) => {
    // if(res) {
      let email_body = `<h2> Request Details </h2> <br>
                        <p>Name: ${this.userDetails.name} </p> 
                        <p>Contact: +91-${this.userDetails.mobile} </p>
                        <p>Email: ${this.userDetails.email} </p>
                        <p>Account number: ${this.withdrawForm.get('acno').value} </p>
                        <p>IFSC: ${this.withdrawForm.get('ifsc').value} </p>
                        <p>Bank Name: ${this.withdrawForm.get('bname').value} </p>
                        <p>Bank Address: ${this.withdrawForm.get('baddr').value} </p>
                        <p>Account Name: ${this.withdrawForm.get('acname').value} </p>
                        <p>Withdraw amount requested : ${this.walletBalance.value} </p>`;
      
      let email = {
        app:'mailto',
        to: GRACIAS_DETAILS.EMAIL_ADDRESS,
        subject: DISPLAY_MESSAGES.WITHDRAW_EMAIL_SUB+' '+this.userDetails.name+'('+this.userDetails.mobile+')',
        body: email_body,
        isHtml: true
      }
      this.emailComposer.open(email).then((res) => {}).catch((err) => {
        this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.EMAIL_ACCESS_ERR,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
      })
    //  } else {
    //   this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.EMAIL_OPENER_ERR,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
    //  }
   // })
    // .catch((err) => {
    //     this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.EMAIL_OPENER_ERR_2,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
    // })
  }
  }

}
