import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-picker-modal',
  templateUrl: './country-picker-modal.component.html',
  styleUrls: ['./country-picker-modal.component.scss'],
})
export class CountryPickerModalComponent implements OnInit {

  @Input() countries: any[] = [];
  filteredCountries: any[] = [];
  searchControl: FormControl;

  constructor(private modalCtrl: ModalController) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.filteredCountries = [...this.countries];
    this.searchControl.valueChanges.pipe(debounceTime(200)).subscribe((searchTerm) => {
      this.filteredCountries = this.countries.filter((c) =>
        c.name.toLowerCase().includes((searchTerm || '').toLowerCase())
      );
    });
  }

  selectCountry(country: any) {
    this.modalCtrl.dismiss(country);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
