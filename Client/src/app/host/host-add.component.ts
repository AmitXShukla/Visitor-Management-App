import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-host-add',
  templateUrl: './host-add.component.html',
  styleUrls: ['./host-add.component.css']
})
export class HostAddComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription;
  savedChanges: boolean = false;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
  }

  setHost(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setHost(formData).subscribe((res) => {
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
