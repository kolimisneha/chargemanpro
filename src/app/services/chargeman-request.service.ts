import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DEVICE_SOCKET_OCPP_URL, DEVICE_SOCKET_URL, RAZR_PAY_IFSC_URL, SERVER_URL } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { RELATIVE_URLS } from '../constants';
import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class ChargemanRequestService {

  constructor(private http: HttpClient) { }


  getRequestDetails(subUrl: string) {
    return this.http.get(SERVER_URL+subUrl).pipe(
      catchError(error => {
          let errorMessage: string;
          if(error.error instanceof ErrorEvent) {
            errorMessage = `Error ${error.error.message}`
          } else {
            errorMessage = this.getServerErrorMessage(error)
          }

          return throwError(errorMessage);
      })
    );
  }
  getBankDetails(subUrl: string) {
    return this.http.get(RAZR_PAY_IFSC_URL+subUrl).pipe(
      catchError(error => {
          let errorMessage: string;
          if(error.error instanceof ErrorEvent) {
            errorMessage = `Error ${error.error.message}`
          } else {
            errorMessage = this.getServerErrorMessage(error)
          }

          return throwError(errorMessage);
      })
    );
  }

  postRequestDetails(subUrl: string, body: any) {
    return this.http.post(SERVER_URL+subUrl, body).pipe(
      catchError(error => {
          let errorMessage: string;
          if(error.error instanceof ErrorEvent) {
            errorMessage = `Error ${error.error.message}`
          } else {
            errorMessage = this.getServerErrorMessage(error)
          }

          return throwError(errorMessage);
      })
    );
  }

  postDeviceCommand(url: any, body: any) {
    return this.http.post(url, body).pipe(
      catchError((error: HttpErrorResponse )=> {
          let errorMessage: string;
          if(error.error instanceof ErrorEvent) {
            errorMessage = `Error ${error.error.message}`
          } else {
            errorMessage = this.getServerErrorMessage(error)
          }

          return throwError(errorMessage);
      })
    );
  }

  getGooglePlaces(lat: number, lng: number, radius: number, type: string, apiKey: string, keyword: string = '', pageToken: string = ''): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
    const params: any = {
      location: `${lat},${lng}`,
      radius: radius.toString(),
      type: 'electric_vehicle_charging_station',
      key: apiKey
    };
    
    if (keyword) {
      params.keyword = keyword;
    }
    
    if (pageToken) {
      params.pagetoken = pageToken;
    }

    const queryString = Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
    const fullUrl = `${url}?${queryString}`;

    console.log('Service calling Google Places Nearby Search:', fullUrl);

    return new Observable((observer) => {
      Http.get({
        url: fullUrl,
        headers: {},
        params: {}
      }).then((response: HttpResponse) => {
        console.log('Service received response:', response.status, JSON.stringify(response.data).substring(0, 500));
        if (response.status === 200) {
          observer.next(response.data);
          observer.complete();
        } else {
          observer.error(`HTTP Error: ${response.status}`);
        }
      }).catch((error: any) => {
        console.error('Service HTTP error:', error);
        observer.error(error);
      });
    }).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }


  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}
}
