import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Country } from './country.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  countryList: Array<Country> = [];
  constructor(private httpServiceService: HttpServiceService) { }

  getCountryList(): void {
    if (this.countryList.length === 0) {
      this.httpServiceService.getList().subscribe((data: any) => {
        this.countryList = data;
      });
    }
  }

}
