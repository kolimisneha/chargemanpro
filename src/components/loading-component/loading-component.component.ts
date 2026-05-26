import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss'],
})
export class LoadingComponentComponent implements OnInit {

  @Input() statusText: string = '';
  @Input() showProgress: boolean = true;
  @Input() stateLoading: boolean = true;
  constructor() { }

  ngOnInit() {}

}
