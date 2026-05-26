import { Component, ElementRef, OnInit, ViewChild, NgZone } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Geolocation } from '@capacitor/geolocation';
import { KEYS } from '../constants';
import { ChargemanRequestService } from '../services/chargeman-request.service';
import { Utils } from '../services/utils.service';
import * as constants from '../constants';
import { IonSlides, ModalController } from '@ionic/angular';
import { LaunchNavigator } from '@awesome-cordova-plugins/launch-navigator/ngx';
import { Capacitor } from '@capacitor/core';
import { ChargerDetailsComponent } from 'src/components/charger-details/charger-details.component';
import { NavigationExtras } from '@angular/router';
import { AgmMap } from '@agm/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var google: any;

@Component({
  selector: 'app-maptab',
  templateUrl: './maptab.page.html',
  styleUrls: ['./maptab.page.scss'],
})
export class MaptabPage implements OnInit {
  @ViewChild('map') mapView: ElementRef;
  @ViewChild('slides', { static: false }) ionSlides: IonSlides;
  title = 'My first AGM project';
  lat: any = 0;
  lng: any = 0;
  zoomRadius;
  mapRadius;
  mapview: any;
  charger_locations: any = [];
  location_details: any = [];
  charger_details: any = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 0
  };
  public searchTerm:string;
  redDotIcon = "../../assets/icon/red_dot.svg";
  greenDotIcon = "../../assets/icon/green_dot.svg";
  callIcon = "../../assets/icon/call_icon.svg";
  markerUrl = "../../assets/icon/maps_marker.svg";
  busyMarker = "../../assets/icon/map_busy_icon.png";
  availableMarker = '../../assets/icon/map_available_icon.png';
  disabledMarker = '../../assets/icon/map_disabled_icon.png';
  googleMarker = '../../assets/icon/map_google_marker.svg';

  // Wallet properties
  walletBalance: any = '0';
  walletSubscription: Subscription;
  walletIconSrc = '../../assets/icon/wallet.svg';
  isChargingActive: boolean = false;
   
  mapStyles: google.maps.MapTypeStyle[] = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi.medical',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'all',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [{ visibility: 'simplified' }]
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [{ visibility: 'off' }]
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [{ color: '#d4e8f0' }]
    }
  ];
  
  @ViewChild('AgmMap') agmMap: AgmMap;
  mapObservable: Subscription;
  searchControl: FormControl;
  isLoading: boolean = true;
  showProgress: boolean = true;
  statusText: string = '';
  isMapDataLoaded: boolean = false;
  constructor(private utils: Utils, private chargemanReq: ChargemanRequestService, private launchNavigator: LaunchNavigator, private modalCtrl: ModalController, private ngZone: NgZone) {
    this.searchControl = new FormControl();
   }


   async addMarkersToMap() {
  for (const place of this.charger_locations) {
    await CapacitorGoogleMaps.addMarker({
      latitude: parseFloat(place.latitude),
      longitude: parseFloat(place.longitude),
      title: place.hostname,
      snippet: place.hostaddress
    });
  }
}

  ionViewDidEnter() {
   // Update charging status on every entry (matching hometab logic)
   this.utils.getStoredUserDetails().then((details) => {
     const chargeCount = details?.chargeCount ?? '0';
     this.isChargingActive = chargeCount !== '0';
   });
   this.utils.chargeStatusObs.subscribe(async (res) => {
     const details = await this.utils.getStoredUserDetails();
     const chargeCount = details?.chargeCount ?? '0';
     this.isChargingActive = chargeCount !== '0' || res === true;
   });

    // Fetch wallet balance from API (was in hometab before)
    this.utils.getStoredUserDetails().then((details) => {
      const walletBody = { "mobile": details.mobile };
      this.chargemanReq.postRequestDetails(constants.RELATIVE_URLS.GET_WALLET_BALANCE, walletBody).subscribe((res: any) => {
        this.walletBalance = parseFloat(res.balance).toFixed(2) ?? '0';
        this.utils.updateValues(constants.KEYS.UPDATE_WALLET_TYPE, this.walletBalance);
        this.utils.storeDetails(constants.KEYS.WALLET_BALANCE, this.walletBalance);
      }, (err) => {
        this.utils.storeDetails(constants.KEYS.WALLET_BALANCE, '0');
      });
    });

    if (!this.walletSubscription) {
      this.walletSubscription = this.utils.walletObs.subscribe((sub) => {
        if (sub === '') {
          this.utils.getStoredDetails(constants.KEYS.WALLET_BALANCE).then((res) => {
            const balance = parseFloat(res?.value);
            this.walletBalance = isNaN(balance) ? '0' : balance.toFixed(2);
          });
        } else {
          this.walletBalance = sub;
        }
      });
    }

   if (this.isMapDataLoaded) {
     return;
   }

   this.isMapDataLoaded = true;
   this.zoomRadius = 13.8;
   this.mapRadius = 30;

   this.mapObservable = this.utils.mapOptObs.subscribe((res) => {
     if (res.type === 'widget') {
       this.zoomRadius = res.zoom;
       this.mapRadius = res.radius;
     } else {
       this.zoomRadius = 13.8;
       this.mapRadius = 30;
     }
   });

    this.statusText = constants.DISPLAY_MESSAGES.LOADING_MAPS_TEXT1;
    this.isLoading = true;
    this.showProgress = true;

    this.showCurrentPosition().then(async () => {
     console.log('=== MAP LOAD STARTED ===');
     console.log('Current position:', this.lat, this.lng);
     
     if (this.lat === 0 || this.lng === 0) {
       this.isLoading = false;
       this.statusText = '';
       this.showProgress = false;
       const dialog = await this.utils.displayDialog(
         KEYS.DIALOG_TYPE_PROMPT,
         constants.DISPLAY_MESSAGES.ALERT_LOCATION_ACCESS_ERR_TITLE,
         constants.DISPLAY_MESSAGES.PERMISSION_DENIED_ERR_NO_NEARBY_STATIONS,
         [constants.DISPLAY_MESSAGES.BUTTON_TEXT_OPEN_SETTINGS, constants.DISPLAY_MESSAGES.BUTTON_TEXT_CANCEL]
       );
       if (dialog === 1) this.utils.openNativeSettings('location');
       return;
     }

      // Load Google EV stations
      this.loadGoogleEVStations();

     this.chargemanReq.postRequestDetails(constants.RELATIVE_URLS.GET_NEAR_CHARGE_STATIONS, {}).subscribe((res: any) => {
       console.log('Backend response:', res?.length, 'stations');
       
       if (res && res.length > 0) {
        const currentPosLat = parseFloat(this.lat);
        const currentPosLng = parseFloat(this.lng);

        let nearChargerLocationDetails = this.utils.getNearestChargeStations(
          currentPosLat, currentPosLng, res, this.mapRadius
        );

        this.utils.storeDetails(constants.KEYS.NEARBY_CHARGE_STATIONS, JSON.stringify(res));

        if (nearChargerLocationDetails.length > 0) {
          this.location_details = nearChargerLocationDetails;

          for (const val of nearChargerLocationDetails) {
            const isDuplicate = this.charger_locations.some(
              (loc: { latitude: string; longitude: string; }) => {
                const existingLat = parseFloat(loc.latitude);
                const existingLng = parseFloat(loc.longitude);
                const newLat = parseFloat(val.latlong.split(',')[0].trim());
                const newLng = parseFloat(val.latlong.split(',')[1].trim());
                return Math.abs(existingLat - newLat) < 0.0001 && Math.abs(existingLng - newLng) < 0.0001;
              }
            );
            if (isDuplicate) continue;

            let lat = val.latlong.split(',')[0].trim();
            let long = val.latlong.split(',')[1].trim();

            let chargerStatus;
            if (val.active === '0') {
              chargerStatus = 'disabled';
            } else {
              chargerStatus = val.chargeCount === '1' ? 'inuse' : 'available';
            }

            this.charger_locations.push({
              "status": chargerStatus,
              "hostaddress": val.hostaddress,
              "hostname": val.hostname,
              "latitude": lat,
              "longitude": long,
              "animation": false,
              "source": "backend"
            });
          }
        }
      }
    }, (err) => {
      console.error('Backend stations fetch error:', err);
    });
  });
}


  async loadGoogleEVStations() {
  const apiKey = environment.mapsKey;
  const radiusMeters = Math.min(this.mapRadius * 1000, 50000);
  const searchKeywords = [
    'electric vehicle charging',
    'EV charging station',
    'car charger',
    'Tata Power',
    'Jio-bp',
    'Tesla',
    'charge point'
  ];

  console.log('=== GOOGLE PLACES API CALL ===');
  console.log('Location:', this.lat, this.lng);
  console.log('Radius (meters):', radiusMeters);

  this.loadGooglePlacesWithKeywords(apiKey, radiusMeters, searchKeywords);
}

async loadGooglePlacesWithKeywords(apiKey: string, radiusMeters: number, keywords: string[]) {
  let allResults: any[] = [];
  let totalPagesLoaded = 0;
  const maxPagesPerKeyword = 3;

  const processResults = (data: any) => {
    if (data.status === 'OK' && data.results?.length > 0) {
      allResults = allResults.concat(data.results);
    }
    return data;
  };

  for (const keyword of keywords) {
    console.log(`Searching keyword: "${keyword}"`);
    
    try {
      const firstPage: any = await new Promise((resolve, reject) => {
        this.chargemanReq.getGooglePlaces(this.lat, this.lng, radiusMeters, 'electric_vehicle_charging_station', apiKey, keyword).subscribe(resolve, reject);
      });
      
      processResults(firstPage);
      
      let pageToken = firstPage.next_page_token;
      let page = 1;
      
      while (pageToken && page < maxPagesPerKeyword) {
        await new Promise(res => setTimeout(res, 2000));
        
        const nextPage: any = await new Promise((resolve, reject) => {
          this.chargemanReq.getGooglePlaces(this.lat, this.lng, radiusMeters, 'electric_vehicle_charging_station', apiKey, '', pageToken).subscribe(resolve, reject);
        });
        
        processResults(nextPage);
        pageToken = nextPage.next_page_token;
        page++;
      }
    } catch (err) {
      console.error(`Error searching keyword "${keyword}":`, err);
    }
    
    await new Promise(res => setTimeout(res, 1000));
  }

  console.log(`Total raw results: ${allResults.length}`);

  let googleCount = 0;
  let duplicateCount = 0;

  for (const place of allResults) {
    if (!place.geometry?.location?.lat || !place.geometry?.location?.lng) continue;
    
    const lat = place.geometry.location.lat;
    const lng = place.geometry.location.lng;

    const isDuplicate = this.charger_locations.some(
      (loc: { latitude: string; longitude: string; }) =>
        Math.abs(parseFloat(loc.latitude) - lat) < 0.0001 &&
        Math.abs(parseFloat(loc.longitude) - lng) < 0.0001
    );
    if (isDuplicate) {
      duplicateCount++;
      continue;
    }

    const name = place.name || 'EV Charging Station';
    const vicinity = place.vicinity || place.formatted_address || '';

    const isOpen = place.opening_hours?.open_now !== false;
    
    this.charger_locations.push({
      status: isOpen ? 'available' : 'disabled',
      hostaddress: vicinity,
      hostname: name,
      latitude: lat.toString(),
      longitude: lng.toString(),
      animation: false,
      source: 'google'
    });

    this.location_details.push({
      hostname: name,
      hostaddress: vicinity,
      latlong: `${lat},${lng}`,
      chargeStatus: isOpen ? 'Available' : 'Unknown',
      source: 'google',
      rph: 'N/A',
      devicetype: 'N/A',
      deviceid: null,
      connectorid: null,
      mobile: null,
      active: isOpen ? '1' : '0',
      chargeCount: '0',
      transactionid: null
    });
    googleCount++;
  }

  // Trigger Angular change detection
  this.charger_locations = [...this.charger_locations];
  this.location_details = [...this.location_details];

  console.log(`Google EV stations added: ${googleCount}, Duplicates skipped: ${duplicateCount}`);
  console.log(`Total stations on map: ${this.charger_locations.length}`);

  if (this.charger_locations.length === 0 && googleCount === 0) {
    this.utils.presentToast('No charging stations found nearby', [], 3000);
  }

  if (this.isLoading) {
    this.isLoading = false;
    this.statusText = '';
    this.showProgress = false;
  }
}


  ionViewDidLeave() {
    const mapoptions = {type: 'exit'}
    this.utils.MapOptSubject.next(mapoptions)
    if (this.mapObservable && !this.mapObservable.closed) {
      this.mapObservable.unsubscribe();
    }
    if (this.walletSubscription) {
      this.walletSubscription.unsubscribe();
    }
  }

  rechargeHandler() {
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD, '/pages/sidemenu/wallet');
  }

  async openChargeStartStopPage() {
    let updatedDetails = await this.utils.getStoredUserDetails();
    let deviceDetails = await (await this.utils.getStoredDetails(constants.KEYS.DEVICE_DETAILS)).value ?? updatedDetails.rph;
    let chargeCount = updatedDetails.chargeCount;
    let transactionid = updatedDetails.transactionid;
    let deviceid = updatedDetails.deviceid
    let devicetype = await (await this.utils.getStoredDetails(constants.KEYS.DEVICE_DETAILS)).value ?? updatedDetails.devicetype;

    const chargerDetails = {
      chargeCount: chargeCount,
      transactionid: transactionid,
      rph: JSON.parse(deviceDetails).rph ?? deviceDetails,
      deviceid: deviceid,
      devicetype: JSON.parse(devicetype).devicetype ?? devicetype
    }
    const chargeDetails: NavigationExtras = {
      state: {
        charge_details: chargerDetails
      }
    }
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT, '/charge-start-stop', chargeDetails)
  }

  
  openMarkerInfo(index) {
   this.ionSlides.slideTo(index);
  }

  slideChanged() {
    this.ionSlides.getActiveIndex().then((res: any) => {
      this.charger_details = [];
      let index = parseInt(res);
      let selectedDetails = this.location_details[index];
      this.lat = selectedDetails.latlong.split(',')[0];
      this.lng = selectedDetails.latlong.split(',')[1]
     // this.charger_details.push({"latitude":selectedDetails.latlong.split(',')[0],"longitude":selectedDetails.latlong.split(',')[1],"animation":false})
    })
  }
  ngOnInit() {
    this.utils.filterObs.pipe(debounceTime(700)).subscribe(res => {
      let values = this.filterItems(this.location_details,res);
      if(values.length > 0) {
      let filteredCoordinates = this.filterItems(this.charger_locations, res);
      filteredCoordinates[0].animation = true;
      setTimeout(() => {
      filteredCoordinates[0].animation = false;
      }, 5000)
      let filteredIndex = this.location_details.findIndex(obj => obj.hostname === values[0].hostname)
      const lat = this.charger_locations[filteredIndex].latitude;
      const longi = this.charger_locations[filteredIndex].longitude;
       this.recenterMap(lat, longi);
      this.ionSlides.slideTo(filteredIndex)
      }
    })
  }

  recenterMap = (lat, lng) => {
    this.mapview.setCenter({ lat: parseFloat(lat), lng: parseFloat(lng) });
  }

  mapReady(map) {
    console.log('mapReady called');
    this.mapview = map;
    
    // Apply styles to hide ALL default POIs
    if (this.mapview && this.mapview.setOptions) {
      this.mapview.setOptions({
        styles: this.mapStyles,
        disableDefaultUI: true
      });
    }
   }
  
  async showCurrentPosition() {
   const res = await this.utils.getCoordinates(KEYS.DIALOG_TEXT_TYPE_LOAD);
   this.lat = res.coords.latitude,
   this.lng = res.coords.longitude
  }
/**
 * To dail a number of charger station
 * @param mobileNumber Mobile number to pass to the dailer
 */
  openDailer(mobileNumber) {
    this.utils.callNumber(mobileNumber)
  }

  openDirections(loc_details) {
    this.utils.launchMaps(loc_details.latlong.split(',')[0], loc_details.latlong.split(',')[1]);
  }

  async openDetails(loc_details) {
    if (loc_details.source === 'google') {
      this.utils.presentToast('Charging not available for this station. Use directions to navigate.', [], 3000);
      return;
    }
  
    const modal = await this.modalCtrl.create({
      component: ChargerDetailsComponent,
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 0.5],
      componentProps: {loc_details}
    });
    modal.present();
    const {data} = await modal.onDidDismiss();
  if(data.type === 'call') {
    this.openDailer(loc_details.mobile);
  } else if(data.type === 'directions') {
    this.openDirections(loc_details)
  } else {
    const extras: NavigationExtras = {
      state: {
        charge_details: loc_details,
        from: 'dashboard'
      }
    }
    this.utils.navigateTo(constants.KEYS.NAV_FORWARD_WITH_OPT,'/charge-start-stop', extras)
  }
  }

  filterItems(_items: any[], searchTerm) {
  return _items.filter((item) => {
    return (item.hostname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1  || item.hostaddress.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) 
  })
 }
}
