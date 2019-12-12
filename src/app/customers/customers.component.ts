import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from "@Data/data.service";
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class CustomersComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    const result = this.dataService.getData();
    console.log(result);
  }

}
