import { UserLookupComponent } from './../../user-lookup/user-lookup.component';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-investigation-teamt',
  templateUrl: './add-investigation-teamt.component.html',
  styleUrls: ['./add-investigation-teamt.component.scss']
})
export class AddInvestigationTeamtComponent implements OnInit {

  team: any;
  editMode: boolean;
  componentRef: any;
  config = {
    displayKey: 'fullName'
  }
  constructor(private api: ApiService, private alert: AlertsLoaderService,
    private route: ActivatedRoute, private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.initTeam();
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let Id = params["id"];
      if (Id) {
        this.getTeamById(Id);
        this.editMode = true;
      }
    });
  }

  initTeam() {
    this.team = {
      "id": null,
      "investigationTeamName": null,
      "investigationTeamDescription": null,
      "investigationTeamThreshold": null,
      "investigationTeamLeads": [
        // {
        //   "id": 28
        // }
      ],
      "investigators": [
        // {
        //   "id": 8
        // }
      ],
      "statusFlag": null
    };
  }
  getTeamById(id: number) {
    this.api.get(`/investigation-team/investigationTeamId/${id}`).subscribe(
      (data) => {
        this.team = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  updateTeam() {
    this.api.put(`/investigation-team/update-investigation-team`, this.team).subscribe(
      (data) => {
        this.alert.success('Investigation team successfully updated');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  addTeam() {
    this.api.post(`/investigation-team/create-investigation-team`, this.team, false).subscribe(
      (data) => {
        this.alert.success('Investigation team added successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  investigatorLookup(which: string) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.lookupType = 'investigator';
    this.componentRef.instance.selectUser.subscribe((data) => {
      this.selectInvestigator(data, which);
    });
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  selectInvestigator(data, which) {
    this.team[which].push(data);
    this.team[which] = [...this.team[which]];
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

}
