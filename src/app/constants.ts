export const REGEX = {
    MOB_NUM_REGEX: '[0-9]{10}',
    USER_NAME_REGEX: '[a-zA-Z ]{3,30}$',
    EMAIL_PATTERN: '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    CHAR_NUM_PATTERN: '^[a-zA-Z0-9-]*$',
    CHAR_NUM_PATTERN_SPACE: '^[ a-zA-Z0-9]*$',
    ADDRESS_REGEX_PATTERN: '^[ A-Za-z0-9.,: -]*$',
    AMOUNT_REGEX_PATTERN: '^([0-9]{1,5})+(\.[0-9]{1,2})?$',
    WALLET_AMOUNT_REGEX: '^([0-9]{1,4})?$',
    BANK_ACCOUNT_NUMBER_REGEX: '[0-9]{9,18}',
    IFSC_REGEX: '^[A-Z]{4}0[A-Z0-9]{6}$',
    ACCOUNT_NAME_REGEX: '^[a-zA-Z ]*$',
    BRANCH_NAME_REGEX: '^[a-zA-Z0-9._()/@, -]*$'
    
}

export const DISPLAY_MESSAGES = {
    NO_MOBILE_NUM_ERR: 'Enter a mobile number to send OTP',
    NO_COUNTRY_CODE_ERR: 'Invalid country code selection',
    INVALID_MOBILE_NUMBER_ERR: 'Please enter a valid mobile number',
    INVALID_OTP_ERR: 'Invalid OTP. Please try again',
    VALID_OTP_TEXT: 'Your OTP is ',
    PROFILE_SAVED_SUCCESSFULLY: 'Profile details saved',
    PROFILE_DETAILS_UPDATED: 'Profile details updated',
    LOADING_MESSAGE: 'Processing your request',
    DISPLAY_PROCESS_ERR: 'Server error occured while processing your request. Please try again',
    CHARGER_ADD_TITLE: 'Add Station',
    CHARGER_EDIT_TITLE: 'Edit Station',
    CHARGER_EDIT_BUTTON_TEXT: 'Update Details',
    CHARGER_ADD_BUTTON_TEXT: 'Add Station',
    DASHBOARD_REQ_PROCESS_TEXT: 'Fetching user details',
    WALLET_REQ_PROCESS_ERR: 'Error while fetching wallet balance from servers',
    ALERT_LOCATION_ACCESS_ERR_TITLE: 'Enable Location',
    ALERT_LOCATION_ENABLE_ERR_MESSAGE: 'Location settings has been turned off. Please enable it to save your charge station details',
    ALERT_CAMERA_ENABLE_ERR_MESSAGE: 'Camera settings has been turned off. Please enable it to upload your kyc details',
    ALERT_LOCATION_PERMISSION_ERR_TITLE: 'Permission Warning!!',
    ALERT_LOCATION_PERMISSION_ERR_MESSAGE: 'Location access request denied. Please allow location permissions request manually in application settings',
    ALERT_LOCATION_PERMISSION_CHARGE_STATION_ERR: 'Chargeman requires to access location coordinates inorder to save charge station details. Please allow the location permission request to save details',
    ERR_DIALOG_TITLE: 'Error',
    ACCESS_LOCATION_ERR_MAPS_TITLE: 'Location access error',
    ACCESS_LOCATION_ERR_MAPS_TEXT: 'Unable to fetch nearby chargestation details due to location access permission denied',
    LOADING_MAPS_TEXT1: 'Loading nearby charge stations...',
    CHARGE_STATION_SAVE_ERR_TXT: 'Fail to save charge station details due to unable to get location coordinates',
    BUTTON_TEXT_OK: 'OK',
    BUTTON_TEXT_CANCEL: 'CANCEL',
    BUTTON_TEXT_OPEN_SETTINGS: 'OPEN SETTINGS',
    SUCCESS_DIALOG_TITLE: 'Success',
    CHARGER_ADD_SUCCESS: 'New charge station details saved successfully',
    CHARGER_ALREADY_EXISTS_1: 'Device ID ',
    CHARGER_ALREADY_EXISTS_2: 'already registered',
    DIALOG_TITLE_INFO: 'Info',
    NO_CHARGE_STATIONS_FOUND_1: 'No charge stations registered on ',
    NO_CHARGE_STATIONS_FOUND_2: 'number',
    CHARGE_STATION_LOADING_TEXT: 'Fetching details, Please wait...',
    CHARGE_STATION_ADD_REQ: 'Registering new station. Please wait...',
    CHARGE_STATION_UPDATE_REQ: 'Updating station details. Please wait...',
    CHARGE_STATION_UPDATE_SUC: 'Station details updated successfully',
    DATE_ERROR: 'Invalid dates selected. Please select dates again.',
    NEAREST_CHARGE_COUNT_ERR: 'Error occured while fetching nearest charge stations. Please try again',
    MAPS_ERR: 'No navigation app found to navigate to the charge station. Please install it and try again',
    CAMERA_ACCESS_ERR: 'Camera permissions denied to capture the image. Please enable it manually.',
    CHARGE_STATION_NOT_REGISTERED: 'Scanned charger was not registered in our records',
    CHARGE_STATION_BUSY: 'Scanned charger is busy. Try again later',
    SCAN_ERR: 'Scan error occured. Please try again scanning QR code',
    ENTER_VALID_AMT_ERR: 'Please enter valid amount', 
    RAZR_PAY_DESC: 'Chargeman wallet recharge',
    RAZR_PAY_ERR: 'Payment error occured.',
    RAZR_PAY_SUCCESS: 'Payment success of Rs.',
    EXIT_DIALOG_WARNING: 'Do you want to exit from app ?',
    DIALOG_TEXT_YES: 'YES',
    DIALOG_TEXT_NO: 'NO',
    LOADING_GPS: 'Fetching GPS coordinates...',
    LOADING_TEXT_CHARGE_STATIONS: 'Loading your charge stations...',
    NETWORK_ERR: 'No internet connection found in the device Please connect to wifi or turn on mobile data to use the application',
    EMAIL_HEADER: 'Support request from  ',
    LOADING_HISTORY: 'Loading charger history details...',
    NO_CHARGER_DETAILS: 'No charge history found',
    NO_TRANSACTION_HIS_FOUND: 'No transaction history found',
    TRANSACTIONS_ERR: 'Srever error occured while getting transactions',
    CHARGER_DETAILS_HEADING: 'Station Details',
    CHARGER_DETAILS_HISTORY: 'Station History',
    CHARGER_HISTORY_NO_DETAILS: 'No previous records found for device ',
    CHARGER_HISTORY_1: 'Error occured while fetching ',
    CHARGER_HISTORY_2: 'history',
    LOADING_MESSAGE_2: 'Loading...',
    CHARGE_START_ALERT: 'Before continuing make sure your charger is connected and your wallet having sufficient funds',
    CHARGE_STOP_ALERT: 'Charging stopped successfully',
    BUTTON_TEXT_CONTINUE: 'Continue',
    WALLET_BALANCE_ERROR_1: 'Error occured while fetching wallet balance. Please try again',
    WALLET_BALANCE_ERROR_2: 'It seems your wallet doesn\'t having sufficient funds to start charge. Please recharge wallet and try again',
    WALLET_DIALOG_TEXT_NAVIGATE: 'Recharge',
    CHARGE_STOP_INFO: 'Do you want to stop charging ?',
    STOP_CHARGE_ERR: 'Server error occured while processing your request. Please try again',
    STOP_CHARGE_ERR_OCPP: 'Error occured while processing your stop request. Please try again',
    STOP_CHARGE_ERR_2: 'Fail to stop charging. Please try again',
    START_CHARGE_SUCCESS: 'Charge start success',
    START_CHARGE_ERR: 'Server error occured while processing your start charge request',
    ALREADY_CHARGING_DEVICE_TEXT: 'A device charging is in progress. Please wait to start charge in another device',
    WALLET_BALANCE_ERROR_3: 'It seems your wallet having insufficient funds. Please recharge your wallet and start charge process',
    STOP_CHARGE_BUTTON: 'Stop Charge',
    LOADING_CHARGE_DETAILS: 'Loading your charge summary. Please wait',
    LOADING_CHARGE_ERR: 'Server error occured while fetching your charge summary. Please try agian later',
    CHARGE_START_STOP_STATUS_PROCESSING: 'Processing...',
    CHARGE_START_STOP_STATUS_CHARGING: 'Charging...',
    CHARGE_START_STOP_STATUS_INSUFFICIENT: 'Insufficient wallet funds',
    CHARGE_START_STOP_STATUS_ERR: 'Error',
    CHARGE_START_STOP_STATUS_SUCCESS_STOP: 'Success',
    IFSC_LOADING_DETAILS : 'Loading bank details...',
    IFSC_ERR: 'Error while fetching bank details. please enter manually',
    WITHDRAW_EMAIL_SUB: 'Re: Chargeman wallet withdraw request from ',
    EMAIL_OPENER_ERR: 'Error while accessing email. No emails configured in your phone',
    EMAIL_OPENER_ERR_2: 'Internal error occured while accessing email. Please try again',
    EMAIL_ACCESS_ERR: 'Error occured while opening email application. Please try again',
    DIALOG_WITHDRAW_NO_BALANCE: 'It seems your wallet having 0 balance to withdraw funds',
    DEVICE_COMM_ERR: 'Unable to communicate with device. Please try again later',
    DEVICE_TIME_OUT_ERR: 'Timeout Error',
    DEVICE_TIME_OUT_ERR_TEXT: 'Looks like the server is taking to long to respond, this can be caused by either poor connectivity or an error with our servers. Please try again in a while',
    DEVICE_INTERRUPTION_ERR: 'Device has stopped responding or has been disconnected',
    ACTION_SHEET_KYC_TITLE: 'Open with',
    ACTION_SHEET_BUTTON_CAMERA: 'Camera',
    ACTION_SHEET_BUTTON_FILES: 'Storage',
    FILE_ACCESS_PERMISSION_ERR: 'Storage access permission denied. Please allow to select files',
    AADHAR_STATUS_TEXT: 'Capture Aadhar Card',
    PAN_STATUS_TEXT: 'Capture PAN Card',
    BALANCE_FETCH_ERR: 'Error occured while fetching wallet balance. Please try again',
    POSITION_FETCH_ERR: 'Error occured while fetching nearby charging stations. Please try again',
    UPLOAD_ERR: 'Upload Error occured. Try again',
    UPLOADING: 'Uploading...',
    FILE_UPLOAD_PROGRESS: 'File upload in progress. Please wait',
    PAYMENT_STORE_FAILURE: 'Due to server issue unable to save & update your last transaction amount in wallet. Please contact our support team',
    CONTACT_SUPPORT: 'Call Suppport',
    CONNECTION_ERR: 'Connection Error',
    DEVICE_DISC_ERR: 'Charge stopped due to charger disconnected from charging device',
    DEVICE_DURATION_LIMIT_REACHED: 'Charge stopped due to duration limit reached',
    NO_NEARRBY_STATIONS_FOUND: 'No nearby charge stations found',
    PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS: 'Unable to get nearby stations due to location access error',
    QR_SCANNER_HINT: 'Place your chargeman QR Code inside scan area',
    APP_VERSION_UPDATE_TEXT: 'New app version available in ',
    VERSION_TEXT_PLAYSTORE: 'Google Playstore',
    VERSION_TEXT_APPSTORE: 'App store',
    GO_TO_PLAYSTORE: 'Open playstore',
    GO_TO_APPSTORE: 'Open App store',
    LOADING_NEARBY: 'Loading nearby stations...',
    OTP_REQUESTING: 'Sending otp request...',
    OTP_VALIDATION_TEXT: 'Processing your request...',
    OTP_SENT_SUCCESS: 'Otp sent successfully',
    NO_CAM_HARDWARE_FOUND: 'Camera hardware not found.',
    FETCHING_REPORTS_1: 'Fetching ',
    FETCHING_REPORTS_2: 'report', 
    HARDWARE_ERR: 'Error',
    NO_REPORTS_FOUND_1: 'No reports found for ',
    NO_REPORTS_FOUND_2: 'on selected frequency',
    LOADING_CHARGER_TYPE_DETAILS: "Loading charger types",
    
}

export const KEYS = {
    IS_FIRST_TIME_USER: 'IS_FIRST_TIME_USER',
    IS_USER_LOGGED_IN: 'IS_USER_LOGGEDIN',
    USER_DETAILS: 'USER_DETAILS',
    USER_NAME: 'USER_NAME',
    MOBILE_NUMBER: 'MOBILE_NUMBER',
    NAV_FORWARD: 'FORWARD',
    NAV_BACKWARD: 'BACKWARD',
    SET_ROOT: 'ROOT',
    NAV_FORWARD_WITH_OPT: 'FORWARD_WITH_OPT',
    TYPE_EDIT_VAL: 'EDIT',
    TYPE_CREATE_VAL: 'CREATE',
    OPERATION_TYPE_EDIT: 'EDIT',
    OPERATION_TYPE_ADD: 'ADD',
    WALLET_BALANCE: 'WALLET_BALANCE',
    GEO_LOC_PERMISSION: 'GEO_LOCATION',
    DIALOG_TYPE_PROMPT: 'PROMPT',
    DIALOG_TYPE_ALERT: 'ALERT',
    STATUS_KEY_NOT_REQ: 'NR',
    STATUS_KEY_DENIED_ALW: 'DENIED_ALWAYS',
    STATUS_KEY_DENIED_ONCE: 'DENIED_ONCE',
    STATUS_KEY_GRANTED: 'GRANTED',
    STATUS_KEY_GRANTED_IN_USE: 'GRANTED_WHEN_USE',
    DIALOG_TEXT_TYPE_CHARGE_STATION_SUBMIT: 'CHARGE_STATION_SUBMIT',
    DIALOG_TEXT_TYPE_LOAD: 'LOAD',
    CHARGER_ERR_STATUS_ALRDY_EXISTS: 'Name Already Exists',
    CHARGER_ADD_SUCCESS_STATUS: 'Success',
    NEARBY_CHARGE_STATIONS: 'NEAR_CHARGE_STATIONS',
    CAMERA_PERMISSION: 'CAMERA_ACCESS',
    UPDATE_WALLET_TYPE: 'WALLET_UPDATE',
    HOST_ID: 'CHARGER_ID',
    TRANSACTION_ID: 'TRANSACTION_ID',
    DEVICE_DETAILS: 'SELECTED_CHARGER_DETAILS',
    CLEAR_SUB: 'CLEAR_SUB',
    IS_CHARGING: 'IS_CHARGING',
    ACTION_SHEET_TYPE: 'KYC',
    CAMERA_NOT_FOUND: 'NO_CAMERA',
    CAMERA_ACCESS_ERR: 'CAMERA_ACCESS_ERROR',
    CAMERA_PERMISSION_SUCCESS: 'PERMISSION_OK',
    CAMERA_PERMISSION_ERR: 'PERMISSION_ERR',
    FILE_PERMISSION_SUCCESS: 'PERMISSION_OK',
    FILE_PERMISSION_ERR: 'PERMISSION_ERR',
    FILE_ACCESS_ERR: 'FILE_ACCESS_ERROR',
    UPLOAD_TYPE_AADHAR: 'aadhar',
    UPLOAD_TYPE_PAN: 'pancard',
    SEARCH_FILTER: 'SEARCH',
    CHARGE_STATUS: 'CHARGE_STATUS',
    CHARGE_REQ: 'REQUESTING',
    CHARGE_CHARGING: 'CHARGING',
    CHARGE_DONE: 'DONE',
    MAP_OPT: 'MAP_OPTIONS',
    LAST_TRANSACTION_TIME: 'LAST_TRANSACTION_TIME',
    SELECTED_DURATION: 'SELECTED_DURATION',
    REGISTERED_CHARGER_DETAILS: 'REGISTERED_STATIONS',
    REQUESTED_DURATION: 'REQUESTED_DURATION',
    URL_TYPE_EXTERNAL: 'EXTERNAL',
    URL_TYPE_INTERNAL: 'INTERNAL',

} 
export const CHARGE_STATUS_TYPES = {
    TIMEOUT_ERR: 'Timeout Error',
    INSUFF_FUNDS: 'Balance Error',
    DEVICE_ERR: 'Internal start error',
    STATUS_SUCCESS: 'Success',
    STATUS_SUCCESS_STOPPED: 'Stopped',
    STATUS_PROCESSING: 'Processing...',
    STATUS_TERMINATING: 'Terminating..'
}

export const RELATIVE_URLS = {
    VALIDATE_OTP: 'validateOTP',
    GET_WALLET_BALANCE: 'getWalletBalance',
    GET_NEAR_CHARGE_STATIONS: 'getNearChargeStation',
    GET_SCANNED_QR_STATION_DETAILS: 'getChargeManByID',
    GET_CHARGER_TYPES: 'chargeTypes',
    GET_CHARGE_HISTORY: 'getUserChargeHistory',
    GET_TRANSACTIONS_HISTORY: 'getWalletHistory',
    GET_HOST_CHARGER_HISTORY: 'getHostChargeHistory',
    GET_CHARGEMAN: 'getChargeMan',
    START_CHARGE: 'startCharging',
    STOP_CHARGE: 'stopCharging',
    START_STOP_CHARGE_DEVICE: 'sendCommand',
    OCPP_START_CHARGE: 'remoteStartTransaction',
    OCPP_STOP_CHARGE:'remoteStopTransaction',
    CHECK_CHARGE: 'goCharging',
    CHARGING_SUMMARY: 'chargingSummary',
    CHARGING_STATUS: 'getChargingStatus',
    UPLOAD_FILES: 'upload',
    APPEND_UPLOAD_URL:'uploads/',
    INSERT_WALLET_HIS: 'insertWalletHistory',
    STOP_SELF_CHARGE: 'stopChargingBySelf',
    GET_APP_VERSION: 'getVersionUpdate',
    GET_REPORTS: 'getReportInfo',
    GET_CONNECTORS_BY_PARENT: 'getChargeManByParentID',
}
export const DEMO_CRED = {
    mobileNumber: '9999999999',
    OTP: '1111'
}
export const GRACIAS_DETAILS = {
    CONTACT_NUMBER: '+91-738-609-2691',
    EMAIL_ADDRESS: 'contact@evchargeman.com',
    WEBSITE: 'evchargeman.com',
    GRACIAS_WEBSITE: 'evgracias.com',
    CHARGERS_SUBPAGE_SITE: '/products/charging-stations/evcm-ac-and-dc-charging-stations'
}

export const TERMS_AND_CONDITIONS = [
    'You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. ',
    
    'You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. ',
    
    'The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to EVChargeMan.',
    
    'EVChargeMan is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason.',
    
    'We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.',
    
    'The EVChargeMan app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the EVChargeMan app won’t work properly or at all.',
    
    'The app does use third-party services that declare their Terms and Conditions.',
    
    // 'Link to Terms and Conditions of third-party service providers used by the app',
    
    // 'Google Play Services',
    
    'You should be aware that there are certain things that EVChargeMan will not take responsibility for. ',
    
    'Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but EVChargeMan cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.',
    
    'If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. ',
    
    'In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. ',
    
    'If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.',
    
    'Along the same lines, EVChargeMan cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, EVChargeMan cannot accept responsibility.',
    
    'With respect to EVChargeMan’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. ',
    
    'EVChargeMan accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.',
    
    'At some point, we may wish to update the app. The app is currently available on Android – the requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. ',
    
    'EVChargeMan does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, ',
    
    'We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.',
    
    // 'Changes to This Terms and Conditions',
    
    'We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.',
    
    'These terms and conditions are effective as of 2022-02-26',

]

export const PRIVACY_POLICY_POINTS = [
    'EVChargeMan built the EVChargeMan app as a Free app. This SERVICE is provided by EVChargeMan at no cost and is intended for use as is.',
    'If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.',
    'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at EVChargeMan unless otherwise defined in this Privacy Policy.',
    'Information Collection and Use',
    
    'For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy',
    'The app does use third-party services that may collect information used to identify you.',
    // Link to the privacy policy of third-party service providers used by the app
    // Google Play Services
    'We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.',
    
    'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory.',
   
    'This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.',

    'We may employ third-party companies and individuals due to the following reasons:',
    'To facilitate our Service;',
    'To provide the Service on our behalf;',
    'To perform Service-related services; or',
    'To assist us in analyzing how our Service is used.',
    'We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',

    'We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.',

    'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',

    'These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.',

    'We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.',

    'This policy is effective as of 2022-02-26',
]






export const DATEFORMAT_STRINGS = {
    MINUTES: 'AS_MINUTES',
    HOURS: 'AS_HOURS'
}

export const CHARGEMAN_DETAILS = {
    ADDRESS: '#1-62-/K/36, 1st Floor(Plot No.36),Kavuri Hills Rd,Hyderabad,Telangana 500033, www.evchargeman.com'
}

