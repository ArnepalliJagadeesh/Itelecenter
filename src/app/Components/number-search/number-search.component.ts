import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { NumberModel } from 'src/app/Models/NumberModel';

@Component({
  selector: 'app-number-search',
  templateUrl: './number-search.component.html',
  styleUrls: ['./number-search.component.scss']
})
export class NumberSearchComponent implements OnInit {
  SerarchType = '';
  NumberDetails: NumberModel = {} as NumberModel;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.CurrentSearchType.subscribe(res => this.SerarchType = res);

    this.dataService.CurrentNumberData.subscribe(res => this.NumberDetails = res);
  }

  OnSearchTypeChanged(val: string) {
    this.dataService.UpdateSearchType(val);
  }

}
