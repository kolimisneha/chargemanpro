import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { map, mergeMap } from 'rxjs/operators';
import { DISPLAY_MESSAGES, KEYS, RELATIVE_URLS } from 'src/app/constants';
import { ChargemanRequestService } from 'src/app/services/chargeman-request.service';
import { Utils } from 'src/app/services/utils.service';
import { SERVER_URL } from 'src/environments/environment';


@Component({
  selector: 'app-kyc-details',
  templateUrl: './kyc-details.page.html',
  styleUrls: ['./kyc-details.page.scss'],
})
export class KycDetailsPage implements OnInit {
  aadharPicURL:string = '';
  panPicURL: string = '';
  aadharPicName: string;
  panPicName: string;
  isPanSelected: boolean = false;
  isAadharSelected: boolean = false;
  userDetails: any;
  aadharStatusText: string = DISPLAY_MESSAGES.AADHAR_STATUS_TEXT;
  panStatusText: string = DISPLAY_MESSAGES.PAN_STATUS_TEXT;
  isAadharLoading: boolean = false;
  isPanLoading: boolean = false;
  constructor(private utils: Utils, private chargeManReq: ChargemanRequestService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.userDetails = await this.utils.getStoredUserDetails();
    this.aadharPicURL = (this.userDetails.aadhar !== '' ) ? SERVER_URL+RELATIVE_URLS.APPEND_UPLOAD_URL+ this.userDetails.aadhar : ''
    if(this.aadharPicURL !== '') {
      this.isAadharLoading = false;
      this.isAadharSelected = true;
      const fileName =  this.aadharPicURL.substring(this.aadharPicURL.lastIndexOf('/')+1);
      this.aadharPicName = fileName;
    }
    this.panPicURL = (this.userDetails.pancard !== '') ? SERVER_URL+RELATIVE_URLS.APPEND_UPLOAD_URL+ this.userDetails.pancard : '';
    if(this.panPicURL !== '') {
      this.isPanLoading = false;
      this.isPanSelected = true;
      const fileName =  this.panPicURL.substring(this.panPicURL.lastIndexOf('/')+1);
      this.panPicName = fileName;
    }
  }


 async openUploadOptions(type) {
   if(!this.isPanLoading && !this.isAadharLoading) {
    const button_menu = [
       {
        text: 'Camera',
        icon: 'camera-outline',
        data: {
          action_type: KEYS.ACTION_SHEET_TYPE,
          type: 'camera'
        },
       
      },
      {
        text: 'Storage',
        icon: 'file-tray-full-outline',
        data: {
          action_type: KEYS.ACTION_SHEET_TYPE,
          type: 'storage'
        },
        
      }
      
    ]
   const sheetCallback: any =  await this.utils.getActionSheetMenu(DISPLAY_MESSAGES.ACTION_SHEET_KYC_TITLE, button_menu);
   const cameraPermission = await this.utils.getCameraPermissions();
      if(cameraPermission === 'yes') {
        const photoPath = await this.utils.getPhoto(sheetCallback.type);
        if(type === 'aadhar') {
          this.isAadharLoading = true;
          this.isAadharSelected = false;
          this.aadharStatusText = DISPLAY_MESSAGES.UPLOADING;
          this.uploadImageToServer(photoPath, KEYS.UPLOAD_TYPE_AADHAR);
        } else {
          this.isPanLoading = true;
          this.isPanSelected = false;
          this.panStatusText = DISPLAY_MESSAGES.UPLOADING;
          this.uploadImageToServer(photoPath, KEYS.UPLOAD_TYPE_PAN);
        }
    } else if (cameraPermission === 'hardware not found') {
      this.utils.displayDialog(KEYS.DIALOG_TYPE_ALERT,DISPLAY_MESSAGES.HARDWARE_ERR, DISPLAY_MESSAGES.NO_CAM_HARDWARE_FOUND,[DISPLAY_MESSAGES.BUTTON_TEXT_OK])
    }
   } else {
     this.utils.presentToast(DISPLAY_MESSAGES.FILE_UPLOAD_PROGRESS, [], 3000);
   }
  }

  async uploadImageToServer(photoDetails, type) {
      const fileName = type === KEYS.UPLOAD_TYPE_AADHAR ? 'aadhar.jpeg' : 'pan.jpeg'
      const formData = new FormData();
      formData.append("image", photoDetails.blob, fileName);
      formData.append("code", this.userDetails.mobile);
      formData.append("filename", type);

      this.chargeManReq.postRequestDetails(RELATIVE_URLS.UPLOAD_FILES, formData).subscribe((res: any) => {
          if(res && res.imgPath) {
            if(type === KEYS.UPLOAD_TYPE_AADHAR) {
              this.isAadharLoading = false;
              this.isAadharSelected = true;
              this.aadharPicURL = photoDetails.path;
              this.aadharPicName  = 'aadhar_'+this.aadharPicURL.substring(this.aadharPicURL.lastIndexOf('/')+1);
              
            } else {
              
              this.isPanSelected = true;
              this.isPanLoading = false;
               this.panPicURL = photoDetails.path;
              this.panPicName  = 'pan_'+this.panPicURL.substring(this.panPicURL.lastIndexOf('/')+1);
            }
          }
      }, (err) => {
        if(type === KEYS.UPLOAD_TYPE_AADHAR) {
          this.isAadharSelected = false;
          this.isAadharLoading = false;
          this.aadharStatusText = DISPLAY_MESSAGES.UPLOAD_ERR
        } else {
          this.isPanSelected = false;
          this.isPanLoading = false;
          this.panStatusText = DISPLAY_MESSAGES.UPLOAD_ERR
        }
      })
  }


}
