import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HometabPage } from 'src/app/hometab/hometab.page';
import { RechargePage } from './recharge/recharge.page';
import { Checkout } from 'capacitor-razorpay';
import { Utils } from 'src/app/services/utils.service';
import { DISPLAY_MESSAGES, GRACIAS_DETAILS, KEYS, RELATIVE_URLS } from 'src/app/constants';
import { environment } from 'src/environments/environment';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  userDetails: any;
  walletBalance: any = 0;
  isLoading: any = true;
  statusText: any = '';
  constructor(private modalCtrl: ModalController, private utils: Utils, private chargemanReq: ChargemanRequestService) { }
  walletBalanceIcon: any = '../../assets/icon/wallet-balance.svg';
  rechargeIcon: any = '../../assets/icon/recharge_icon.svg';
  withdrawIcon: any = '../../assets/icon/withdrawn_icon.svg';
  consumeIcon: any = '../../assets/icon/consume_icon.svg';
  walletSubscription: any
  transactions = []
  

  async ionViewDidEnter() {
    this.statusText = 'Loading...';
    this.walletSubscription = this.utils.walletObs.subscribe(async (res) => {
      if(res === '') {
        this.walletBalance =  parseFloat(await (await this.utils.getStoredDetails(KEYS.WALLET_BALANCE)).value).toFixed(2) ?? '0';
      } else {
        
        this.walletBalance = parseFloat(res).toFixed(2);
      }
    })
    
    this.loadTransactions(false);
  }

  ionViewDidLeave() {
    // if(this.walletSubscription || !this.walletSubscription.complete()) {
    //   this.walletSubscription.unsubscribe();
    // }
  }

  loadTransactions(isRefresher, event?:any) {
    this.transactions = [];
    this.utils.getStoredUserDetails().then((res) => {
      const body = {
      "mobile": res.mobile
      }
      this.chargemanReq.postRequestDetails(RELATIVE_URLS.GET_TRANSACTIONS_HISTORY, body).subscribe((res: any) => {
        this.isLoading = false;
        if(res && res.length > 0) { 
          this.transactions = res;
          this.transactions.map((item: any) => {
            item.transactiondate = this.utils.convertDateTimeFormat(item.transactiondate, "YYYY-MM-DD HH:mm:ss", "DD-MM-YYYY HH:mm A");
            item.type = item.type[0].toUpperCase() + item.type.slice(1);
            item.walletamount = parseFloat(item.walletamount).toFixed(3).slice(0,-1)
          })
          
        } else {
          this.statusText = DISPLAY_MESSAGES.NO_TRANSACTION_HIS_FOUND;
        }
      }, (err) => {
        
        this.statusText = DISPLAY_MESSAGES.TRANSACTIONS_ERR;
      })
    })
    if(isRefresher) {
      event.target.complete();
    }
    
  }
 
  async openRecharge(){
    const modal = await this.modalCtrl.create({
      component: RechargePage,
      breakpoints: [0, 0.3, 0.4],
      initialBreakpoint: 0.4,
      presentingElement: await this.modalCtrl.getTop()
    });
    await modal.present();

    const { data } = (await modal.onWillDismiss());
    if(data !== undefined) {
    if(data?.amount === '0' || data?.amount === '00.00' || data?.amount === '0.00'|| data?.amount === '00.0') {
      this.utils.presentToast(DISPLAY_MESSAGES.ENTER_VALID_AMT_ERR, [], 3000);
    } else {
      let rechargeamount = data.amount;
      const razorpay_opt = {
        key: environment.razorpay_key,
        amount: rechargeamount+'00',
        description: DISPLAY_MESSAGES.RAZR_PAY_DESC,
        image:'',
        currency: 'INR',
        name: 'EV-Gracias',
        prefill: {
          email: this.userDetails.email,
          contact: this.userDetails.mobile,
          name: this.userDetails.name
        },
        theme: {
          color: '#8EBA47'
        }
      }

      try {
        let data: any = await Checkout.open(razorpay_opt);
        this.utils.presentToast(DISPLAY_MESSAGES.RAZR_PAY_SUCCESS+rechargeamount,[],5000);
        const walletBody = {
          "mobile" : this.userDetails.mobile,
          "wallet" : this.walletBalance,
          "walletamount" : rechargeamount,
          "type":"Recharge",
          "transactionid" : data.response.razorpay_payment_id,
          "bankname":"-",
          "createdby" : this.userDetails.name
        }
        this.chargemanReq.postRequestDetails(RELATIVE_URLS.INSERT_WALLET_HIS, walletBody).subscribe(async (res: any) => {
          if(res && res.status === 'success') {
            this.walletBalance =  res.wallet;
            this.utils.storeDetails(KEYS.WALLET_BALANCE, this.walletBalance);
            this.utils.updateValues(KEYS.UPDATE_WALLET_TYPE, this.walletBalance);
            // this.loadTransactions(false);
          } else {
            const res = await this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT, DISPLAY_MESSAGES.ERR_DIALOG_TITLE, DISPLAY_MESSAGES.PAYMENT_STORE_FAILURE, [DISPLAY_MESSAGES.CONTACT_SUPPORT, DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL])
            if(res === 1) {
              const contactNum = (GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[1]+GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[2]+GRACIAS_DETAILS.CONTACT_NUMBER.split('-')[3])
              this.utils.callNumber(contactNum);
            } 
          }
        })        
      } catch(e) {
        this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT,DISPLAY_MESSAGES.ERR_DIALOG_TITLE,DISPLAY_MESSAGES.RAZR_PAY_ERR,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
        
      }
     }
    }
  }
  ngOnInit() {
    this.utils.getStoredUserDetails().then((res) => {
      this.userDetails = res;
    })
  }

  
}
