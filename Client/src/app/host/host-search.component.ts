import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-search',
  templateUrl: './host-search.component.html',
  styleUrls: ['./host-search.component.css']
})
export class HostSearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  getHosts(formData) {
    this._router.navigate(['/host-result'], { queryParams: {'inputName': formData.inputName, 'inputAddress': formData.inputAddress, 'inputEmail': formData.inputEmail, 'inputPhone': formData.inputPhone}});
  }
}
