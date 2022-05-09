import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guest-result',
  templateUrl: './guest-result.component.html',
  // styleUrls: ['./guest-result.component.css']
})
export class GuestResultComponent implements OnInit, OnDestroy {
  error: boolean = false;
  errorMessage: String = 'Something went wrong with App';
  dataLoading: boolean = false;
  private querySubscription: Subscription | undefined;
  savedChanges: boolean = false;
  docId: any;
  docData: any;

  constructor(private _backendService: BackendService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.queryParams.subscribe(
      res => {
        this.docId = res;
        this.getData();
      });
  }
  getData() {
    this.dataLoading = true;
    return this.querySubscription = this._backendService.getGuests(this.docId).subscribe((res) => {
      let Res: { [index: string]: any } = res;
      Res = res;
      if (Res["errorCode"] > 0) {
        this.error = false;
        this.errorMessage = "";
        this.dataLoading = false;
        this.docData = Res["data"];
      } else {
        this.error = true;
        this.errorMessage = Res["errorMessage"];
        this.dataLoading = false;
        this.savedChanges = true;
      }
    },
      (error) => {
        this.error = true;
        // this.errorMessage = error.message;
        this.dataLoading = false;
        this.savedChanges = true;
      },
      () => {
        this.dataLoading = false;
      });
  }
  checkIn(guestId: any, guestName: any) {
    this._backendService.setCheckIn('', '', guestId, guestName);
    this._router.navigate(['/register-result']);
  }
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
