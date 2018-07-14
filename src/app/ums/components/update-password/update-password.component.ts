import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  password = {
    oldPassword: '',
    newPassword: '',
    reConfirmNewPassword: ''
  };

  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }

  updatePassword() {
    this.api.put(`/user/update-user-password`, this.password).subscribe(
      (data) => {
        this.alert.success('Password successfully updated');
        this.password = {
          oldPassword: '',
          newPassword: '',
          reConfirmNewPassword: ''
        };
      }, (error) => {
        this.alert.error(error);
      }
    )

  }

  clear() {
    this.password = {
      oldPassword: '',
      newPassword: '',
      reConfirmNewPassword: ''
    };
  }

}
