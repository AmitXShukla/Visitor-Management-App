import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guest-search',
  templateUrl: './guest-search.component.html',
  // styleUrls: ['./guest-search.component.css']
})
export class GuestSearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  getGuests(formData: { inputName: any; inputAddress: any; inputEmail: any; inputPhone: any; }) {
    this._router.navigate(['/guest-result'], { queryParams: { 'inputName': formData.inputName, 'inputAddress': formData.inputAddress, 'inputEmail': formData.inputEmail, 'inputPhone': formData.inputPhone } });
  }
}
