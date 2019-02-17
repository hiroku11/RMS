import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  @Input() cycle: any;
  data: any;
  incident: any;
  constructor(private _apiService: ApiService, private _alert: AlertsLoaderService) { }

  ngOnInit() {
    this.data = this.cycle.incidentTabPage;
  }
  // ngOnChanges() {
  //   this.data = this.cycle.incidentTabPage;
  // }

  getIncidentDetails(incident) {
    this.incident = null;
    this._alert.showLoader();
    this._apiService.get('/incident/uniqueIncidentId/' + incident.uniqueIncidentId).subscribe((data) => {
      this.incident = data;
      this.prepareIncident();
      this._alert.hideLoader();
    }, (error) => {
      this._alert.error('Error getting incident details. Try again.');
    });
  }

  prepareIncident() {
    this.incident.suspects = this.incident.suspects.concat(this.incident.employeeSuspects);
    if (!this.incident.accident) {
      this.incident.accident = {};
    }
    if (this.incident.accident.witnesses) {
      this.incident.accident.witnesses = this.incident.accident.witnesses.concat(this.incident.accident.employeeWitnesses);
    }
    if (this.incident.accident.injuredPersons) {
      this.incident.accident.injuredPersons = this.incident.accident.injuredPersons.concat(this.incident.accident.employeeInjuredPersons);
    }
  }
}
