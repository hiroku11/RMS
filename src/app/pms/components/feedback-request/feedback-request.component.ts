import { UserService } from './../../../services/user.service';
import { ConfigService } from './../../../services/config.service';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserLookupComponent } from '../user-lookup/user-lookup.component';

@Component({
  selector: 'app-feedback-request',
  templateUrl: './feedback-request.component.html',
  styleUrls: ['./feedback-request.component.scss']
})
export class FeedbackRequestComponent implements OnInit {
  cycle: any;
  userPerformanceCycleId: number;
  public componentRef: any;
  selectedUsers: any[] = [];
  usersOptions: any[] = [];
  emails: string;
  userDetails: any;
  request: any =
    {
      "requestorComments": "",
      "users": [
      ],
      "emailIds": [
      ],
      "publicURL": "",
      "securedURL": ""
    }
  constructor(private route: ActivatedRoute, private _api: ApiService, private userService: UserService,
    private _alert: AlertsLoaderService, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver, private config: ConfigService) {

  }

  ngOnInit() {
    this.userService.getUserDetails().then((data) => {
      this.userDetails = data;
    });
    this.route.params.subscribe((params: Params) => {
      this.userPerformanceCycleId = params["cycleId"];
      if (this.userPerformanceCycleId) {
        this.getCycle(this.userPerformanceCycleId);
      }
    });
  }

  getCycle(id: number) {
    this._api.get(`/performance/employee-sub-view/userPerformanceCycleId/${id}`).subscribe(
      (data) => {
        this.cycle = data;
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  userLookup() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.selectUser.subscribe((data) => {
      this.addUserToSelected(data);
    });
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  addUserToSelected(user: any) {
    const exists = this.selectedUsers.filter((us) => us.id === user.id);
    if (exists.length === 0) {
      this.selectedUsers.push(user);
      this.usersOptions.push(user);
      this.usersOptions = [...this.usersOptions];
      this.selectedUsers = [...this.selectedUsers];
      this._alert.success('User selected for request.');
    }

  }
  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();

  }
  sendFeedbackRequest() {
    this.selectedUsers.forEach((item) => {
      this.request.users.push({ id: item.id, loginId: item.userLoginId });
    });
    if (this.emails) {
      this.request.emailIds = this.emails.split(",");
    }
    this.request.securedURL = `${this.config.config.feedbackUrlPrefix}pms/feedback/give-feedback/${this.userPerformanceCycleId}`;
    this.request.publicURL = `${this.config.config.feedbackUrlPrefix}give-feedback-external/${this.userPerformanceCycleId}`;
    this._api.post(`/performance/send-feedback-request/userPerformanceCycleId/${this.userPerformanceCycleId}`, this.request, false)
      .subscribe((data) => {
        this._alert.success("Feedback request successfully sent.");
      }, (error) => {
        this._alert.error(error);
      })
  }
}
