import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

moment.locale('pt-BR');

const DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }
  ],
})
export class SearchFormComponent implements OnInit {

  searchForm: any;
  initialStartDate = moment();
  initialEndDate = moment().add(2, 'day');

  constructor(private _formBuilder: FormBuilder) {
    this.searchForm = this._formBuilder.group({
      'address': ['', [Validators.required]],
      'startDate': [{value: this.initialStartDate, disabled: true}, [Validators.required]],
      'endDate': [{value: this.initialEndDate, disabled: true}, [Validators.required]]
    });
  }

  ngOnInit() {
    console.log(this.initialStartDate, this.initialEndDate);
  }

}
