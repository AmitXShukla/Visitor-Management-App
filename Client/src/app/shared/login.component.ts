import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackendService } from '../services/backend.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
    error: boolean = false;
    errorMessage: String = 'Something went wrong with App';
    dataLoading: boolean = false;
    private querySubscription: Subscription | undefined;
    savedChanges: boolean = false;

    constructor(private _backendService: BackendService, private _route: Router) { }

    ngOnInit() {
        if (window.localStorage.getItem('token')) {
            this.savedChanges = true;
        }
    }

    login(formData: any) {
        this.dataLoading = true;
        this.querySubscription = this._backendService.login(formData).subscribe((res) => {
            let Res: { [index: string]: any } = res;
            if (Res["errorCode"] > 0) {
                this.error = false;
                this.errorMessage = "";
                this.dataLoading = false;
                window.localStorage.setItem('token', Res["data"].token);
                this.savedChanges = true;
                // this._route.navigate(['/aboutus']);
            } else {
                this.error = true;
                this.errorMessage = Res["errorMessage"];
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

    logout() {
        window.localStorage.removeItem('token');
        this.savedChanges = false;
    }

    ngOnDestroy() {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }

}
