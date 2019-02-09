import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-guest-add',
  templateUrl: './guest-add.component.html',
  styleUrls: ['./guest-add.component.css']
})
export class GuestAddComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
  }

  setGuest(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setGuest(formData).subscribe((res) => {
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
