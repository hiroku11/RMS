import { UserLookupComponent } from './../user-lookup/user-lookup.component';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  userInput: any;
  public componentRef: any;
  constructor(private _api: ApiService, private alert: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  submit() {
    if (!this.userInput) {
      return;
    }
    this._api.passwordReset(`/user/reset-user-password`, { userInput: this.userInput }).subscribe(
      (data) => {
        this.alert.success('A mail has been sent to your registered email. Please check mail for password reset');
      }, (error) => {
        this.alert.error(error);
      }
    );
    return false;
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }
}
