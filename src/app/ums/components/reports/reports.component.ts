import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
declare var Highcharts;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  firstReportData: any;
  secondReportData: any;
  tab = 1;
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getFirstReportData();
    this.getSecondReportData();
  }

  getFirstReportData() {
    ///admin/admin-dashboard-org-dept-role-user-dist
    this.api.get(`/admin/admin-dashboard-org-dept-role-user-dist`).subscribe(
      (data) => {
        this.firstReportData = data;
        this.createFirstReport(data);
      }, (error) => {
        this.alert.error(error)
      })

  }
  getSecondReportData() {
    this.api.get(`/admin/admin-dashboard-user-role-dist`).subscribe(
      (data) => {
        this.secondReportData = data;
        //this.createSecondReport(data);
      }, (error) => {
        this.alert.error(error)
      })
  }

  createSecondReport(data: any) {
    const roles = [];
    const roleData = [];

    for (const val of data) {
      roles.push(val.roleName);
      roleData.push(val.noOfUsers);
    }
    Highcharts.chart('secondReport', {

      title: {
        text: 'User and Roles distribution'
      },

      xAxis: {
        categories: roles
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },

      series: [{
        type: 'column',
        colorByPoint: true,
        data: roleData,
        showInLegend: false
      }]

    });
  }

  prepareDataFirstReport(key: any, tmp: string) {
    if (key.indexOf('inactive') > -1 && key.indexOf(tmp) > -1) {
      return 'inactive';
    }
    if (key.indexOf('active') > -1 && key.indexOf(tmp) > -1) {
      return 'active';
    }
    if (key.indexOf('total') > -1 && key.indexOf(tmp) > -1) {
      return 'total';
    }
    return 'extra';
  }
  createFirstReport(data: any) {
    const rep = {
      active: [],
      inactive: [],
      total: [],
      extra: []
    }
    for (const key in data) {
      if (key !== 'id') {
        rep[this.prepareDataFirstReport(key, 'Org')][0] = data[key];
        rep[this.prepareDataFirstReport(key, 'Dept')][1] = data[key];
        rep[this.prepareDataFirstReport(key, 'Role')][2] = data[key];
        rep[this.prepareDataFirstReport(key, 'User')][3] = data[key];
      }

    }
    for (const key in rep) {
      for (let i = 0; i < rep[key].length; i++) {
        if (typeof rep[key][i] == 'undefined') {
          rep[key][i] = 0;
        }
      }
    }
    Highcharts.chart('firstReport', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Organization, Department, Role & User Distribution'
      },
      xAxis: {
        categories: [
          'Organization',
          'Department',
          'Role',
          'Users'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Active',
        data: rep.active

      }, {
        name: 'Inactive',
        data: rep.inactive

      }, {
        name: 'Total',
        data: rep.total

      }]
    });
  }
  changeTab(tab) {
    this.tab = tab;
    setTimeout(() => {
      if (tab == 2) {
        this.createSecondReport(this.secondReportData);
      } else {
        this.createFirstReport(this.firstReportData);
      }
    }, 100)

  }



}
