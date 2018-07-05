import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
declare var Highcharts: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  firstReportData: any;
  secondReportData: any;
  thirdReportData: any;
  fourthReportData: any;
  tab = 1;
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getFirstReportData();
  }

  changeTab(tab) {
    this.tab = tab;
    setTimeout(() => {
      if (tab == 2) {
        if (!this.secondReportData) {
          this.getSecondReportData();
        } else {
          this.createSecondReport(this.secondReportData)
        }
      } else if (tab == 3) {
        if (!this.thirdReportData) {
          this.getThirdReportData();
        } else {
          this.createThirdReport(this.thirdReportData)
        }
      } else if (tab == 4) {
        if (!this.fourthReportData) {
          this.getFourthReportData();
        } else {
          this.createFourthReport(this.fourthReportData)
        }
      } else {
        this.createFirstReport(this.firstReportData);
      }
    }, 100)

  }

  getFirstReportData() {
    this.api.get(`/admin/admin-dashboard-user-profile-course-volume`).subscribe(
      (data) => {
        this.firstReportData = data;
        this.createFirstReport(data);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getSecondReportData() {
    this.api.get(`/admin/admin-dashboard-user-course-progress-data`).subscribe(
      (data) => {
        this.secondReportData = data;
        this.createSecondReport(this.secondReportData);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getThirdReportData() {
    this.api.get(`/admin/admin-dashboard-user-course-approval-data`).subscribe(
      (data) => {
        this.thirdReportData = data;
        this.createThirdReport(data);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  getFourthReportData() {
    this.api.get(`/admin/admin-dashboard-course-statistics`).subscribe(
      (data) => {
        this.fourthReportData = data;
        this.createFourthReport(data);
      }, (error) => {
        this.alert.error(error);
      }
    )
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
        rep[this.prepareDataFirstReport(key, 'Course')][0] = data[key];
        rep[this.prepareDataFirstReport(key, 'Profile')][1] = data[key];
        rep[this.prepareDataFirstReport(key, 'User')][2] = data[key];
        rep[this.prepareDataFirstReport(key, 'Role')][3] = data[key];
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
        text: 'User, Profile, Course and Role Volume'
      },
      xAxis: {
        categories: [
          'Course',
          'Profile',
          'User',
          'Role'
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

  createSecondReport(data: any) {
    const status = ['Not Started', 'In Progress', 'Passed', 'Completed', 'Failed', 'Total'];
    const stats = [data.notStartedCount, data.inProgressCount, data.passedCount, data.completedCount, data.failedCount,
    data.totalCount];

    Highcharts.chart('secondReport', {

      title: {
        text: 'User Course Progress'
      },

      xAxis: {
        categories: status
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
        data: stats,
        showInLegend: false
      }]

    });
  }

  createThirdReport(data) {
    const status = ['Aborted', 'Approval Required', 'Approval Not Required', 'Approval Pending',
      'Approved', 'Rejected', 'Cancelled', 'Total'];
    const stats = [data.abortedCount, data.approvalRequiredCount, data.approvalNotRequiredCount,
    data.approvalPendingCount, data.approvedCount,
    data.rejectedCount, data.cancelledCount, data.totalUserCourseCount];

    Highcharts.chart('thirdReport', {

      title: {
        text: 'User Course Approval'
      },

      xAxis: {
        categories: status
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
        data: stats,
        showInLegend: false
      }]

    });
  }

  createFourthReport(data) {
    const status = ['Approval Required', 'Approval Not Required', 'People Manager',
      'Non-People Manager', 'Total'];
    const stats = [data.approvalRequiredCount, data.approvalNotRequiredCount,
    data.peopleManagerCoursesCount, data.nonPeopleManagerCoursesCount, data.totalCourseCount];

    Highcharts.chart('fourthReport', {

      title: {
        text: 'Course Statistics'
      },

      xAxis: {
        categories: status
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
        data: stats,
        showInLegend: false
      }]

    });
  }
}
