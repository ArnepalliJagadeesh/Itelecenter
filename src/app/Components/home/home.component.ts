import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NumberModel } from 'src/app/Models/NumberModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  SerarchType = '';
  NumberDetails: NumberModel = {} as NumberModel;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.CurrentSearchType.subscribe(res => this.SerarchType = res);
  }
  OnSearchTypeChanged(val: string) {
    console.log(val);
    this.dataService.UpdateSearchType(val);
  }
  OnSubmit() {
    this.NumberDetails.NumberType = this.SerarchType;
    this.NumberDetails.Plan = 'Pro';
    this.NumberDetails.SelectedNumber = '8001234567';

    this.dataService.UpdateNumberData(this.NumberDetails);
    this.router.navigate(['NumberSearch']);
  }
}
