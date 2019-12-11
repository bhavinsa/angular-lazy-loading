import { Component } from '@angular/core';
import { StorageService } from "./storage.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazzyLoad';

  constructor(private storageService: StorageService){
    localStorage.setItem('name', 'bhavin');
    this.storageService.set('id', 1);
    console.log(this.storageService.get('id'));
  }
}
