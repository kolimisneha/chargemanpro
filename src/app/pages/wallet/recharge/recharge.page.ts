import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Utils } from 'src/app/services/utils.service';
import * as constants from '../../../constants';
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  quickAmounts = [{amount:500},{amount:750},{amount:1000},{amount:2000}]
  enteredAmount: any = '';
  rechargeForm: FormGroup;
  rupeeIcon = '../../../assets/icon/rupee.svg'
  constructor(private utils: Utils, private formBuilder: FormBuilder, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.rechargeForm = this.formBuilder.group({
      'rechargeAmount': ['', Validators.compose([Validators.required, Validators.pattern(constants.REGEX.WALLET_AMOUNT_REGEX), this.minAmount])]
    })
  }
  selectMoney(amount) {
    this.rechargeForm.get('rechargeAmount').setValue(amount.amount);
  }
  recharge() {
    this.modalCtrl.dismiss({
      amount: this.rechargeForm.get('rechargeAmount').value
    })
  }

  minAmount(control: AbstractControl) : {[key: string]: any} | null {
    const amount = control.value;
      if(amount === "" || parseInt(amount) >= 250 && parseInt(amount) <= 5000) {
        return null;
      } else {
        return { 'minamount': true };
     }
  }

  handleKeyupEnter(event) {
    if(event.key=="Enter") {
      if(this.rechargeForm.get('rechargeAmount').value < 100 || this.rechargeForm.get('rechargeAmount').value > 5000){
        event.preventDefault();
      }
    }
  }
}
