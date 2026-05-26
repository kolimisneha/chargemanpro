import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { NavController } from '@ionic/angular';
import { Authentication } from '../services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChargemanRequestService } from '../services/chargeman-request.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private utils: Utils, private navCtrl: NavController,
    private auth: Authentication, private fb: FormBuilder, private chargemanReq: ChargemanRequestService) { }
  redirectTo: string = '';
  mobileNumber: string = '';
  profileForm: FormGroup;
  isReadonly: boolean = true;
  isTermsChecked: boolean = false;
  isTermsVisible: boolean = true;
  
  ngOnInit() {
    let storedMobileNumber = '';
    let storedUserName = '';
    let storedEmail = '';
    this.utils.getStoredDetails(constants.KEYS.USER_DETAILS).then((res: any) => {
      if(res.value !== null && res.value !== '') {
        const storedDetails = JSON.parse(res.value)
        storedMobileNumber = storedDetails.mobile;
        storedUserName = storedDetails.name;
        storedEmail = storedDetails.email;
        this.isTermsChecked = true;
        this.isTermsVisible = false;
        this.profileForm.controls['mobileNumber'].setValue(storedMobileNumber);
        this.profileForm.controls['username'].setValue(storedUserName);
        this.profileForm.controls['emailAddress'].setValue(storedEmail);
      }
    })
    this.activatedRoute.queryParams.subscribe(params => {
      const _params = this.router.getCurrentNavigation().extras.state;
      this.redirectTo = _params.pageName;
      this.mobileNumber = _params?.mob;
      if(this.redirectTo === 'dashboard') {
        this.isReadonly = true;
      } else {
        this.isReadonly = true;
        storedMobileNumber = this.mobileNumber;
      }
    })
      

    this.profileForm = this.fb.group({
      mobileNumber: [storedMobileNumber, Validators.compose([Validators.required, Validators.pattern(constants.REGEX.MOB_NUM_REGEX)])],
      username: [storedUserName, Validators.compose([Validators.required, Validators.pattern(constants.REGEX.USER_NAME_REGEX), Validators.minLength(3), Validators.maxLength(20)])],
      emailAddress: [storedEmail, Validators.compose([Validators.required, Validators.pattern(constants.REGEX.EMAIL_PATTERN)])]
    })
  }

  ionViewWillEnter() {

  }


  onSubmit(){
    this.utils.showLoader(constants.DISPLAY_MESSAGES.LOADING_MESSAGE);
   
    const profile_details = {
      "mobileNo": this.profileForm.value.mobileNumber,
      "name": this.profileForm.value.username,
      "email": this.profileForm.value.emailAddress
    }
    this.chargemanReq.postRequestDetails('updateProfile', profile_details).subscribe((res: any) => {
      if(res && res.message === 'success') {
        this.utils.dismissLoader();
        if(this.redirectTo === 'login') {
        this.auth.setLoginFlag();
        const userDetails = {"name": this.profileForm.value.username, "email": this.profileForm.value.emailAddress, "mobile": this.profileForm.value.mobileNumber}
        this.utils.storeDetails(constants.KEYS.USER_DETAILS, JSON.stringify(userDetails))
        this.navCtrl.navigateRoot('/pages/sidemenu'); 
        this.utils.presentToast(constants.DISPLAY_MESSAGES.PROFILE_SAVED_SUCCESSFULLY,[],3000)
        } else {
          this.utils.getStoredDetails(constants.KEYS.USER_DETAILS).then((res) => {
            if(res.value) {
              let existingDetails: any = JSON.parse(res.value);
              existingDetails.email = this.profileForm.value.emailAddress;
              existingDetails.mobile = this.profileForm.value.mobileNumber;
              existingDetails.name = this.profileForm.value.username
              this.utils.storeDetails(constants.KEYS.USER_DETAILS, JSON.stringify(existingDetails));
              this.utils.presentToast(constants.DISPLAY_MESSAGES.PROFILE_DETAILS_UPDATED,[],3000)
            }
          })
          this.navCtrl.navigateBack('/pages/sidemenu');
        }
      } else {
        this.utils.dismissLoader()
        this.utils.presentToast('Some error occured while updating profile',[], 3000);
      }
    }, (err: any) => {
      this.utils.dismissLoader();
      this.utils.presentToast(constants.DISPLAY_MESSAGES.DISPLAY_PROCESS_ERR, [], 3000); 
    })
  

}

  openPage(type) {
    const pageroute = type === 'terms' ? '/terms-and-conditions' : '/privacy-policy';
    const extras: NavigationExtras = {
      state: {
        sourcePage: 'profile-terms-privacy'
      }
    }
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, pageroute, extras);
  }
  onTermsAgreeHandler(event) {
    this.isTermsChecked = event.target.checked;
  }
}
