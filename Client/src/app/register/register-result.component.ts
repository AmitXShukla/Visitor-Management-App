import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-register-result',
  templateUrl: './register-result.component.html',
  styleUrls: ['./register-result.component.css']
})
export class RegisterResultComponent implements OnInit, OnDestroy {

  showHistory: boolean = false;
  currentDttm;
  checkInHostId: null;
  checkInGuestId: null;
  checkInHostName: null;
  checkInGuestName: null;
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;
  docData;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.currentDttm = new Date();
    this.getHost();
  }
  getHost() {
    this.checkInHostId = this._backendService.checkInHostId;
    this.checkInHostName = this._backendService.checkInHostName;
    this.checkInGuestId = this._backendService.checkInGuestId;
    this.checkInGuestName = this._backendService.checkInGuestName;
  }
  getRegister(filter) {
    let formData = { _id: "", srchType : filter };
    formData._id = (filter === "guest") ? this.checkInGuestId : this.checkInHostId;
    this.dataLoading = true;
    this.querySubscription = this._backendService.getRegister(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.docData = res["data"];
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
          this.savedChanges = true;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
          this.savedChanges = true;
      },
      () => {
          this.dataLoading = false;
      });
  }
  setRegister(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setRegister(formData).subscribe((res) => {
      if (res["errorCode"] > 0) {
          this.error = false;
          this.errorMessage = "";
          this.dataLoading = false;
          this.savedChanges = true;
      } else {
          this.error = true;
          this.errorMessage = res["errorMessage"];
          this.dataLoading = false;
      }
  },
      (error) => {
          this.error = true;
          this.errorMessage = error.message;
          this.dataLoading = false;
      },
      () => {
          this.dataLoading = false;
      });
}
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
  }
}
}
