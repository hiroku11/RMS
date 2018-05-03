import { Component, OnInit, Input } from '@angular/core';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent implements OnInit {
  @Input() userPerformanceCycleId: number;
  @Input() cycle: any;
  goalData:any;
  goalNo: number;
  dropDownsData:any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService,
    private _sharedService: SharedService) {
      this.dropDownsData = this._sharedService.pmsDropDownnsData;
      if (!this._sharedService.pmsDropDownnsData.category) {
        this._sharedService.getPmsDropdownsData();
      }
      this._sharedService.pmsDropDownService.subscribe((data) => {
        this.dropDownsData = data;
      })
   }

  ngOnInit() {
    // this.getCycleData()
    this.initGoalData();
  }
  initGoalData(){
    this.goalData = {
      "id": null,
      "userPerformanceCycle": null,
      "goal": "add or update goal test 1",
      "actionPlan": null,
      "goalSetDate": null,
      "plannedCompletionDate": null,
      "actualCompletedDate": null,
      "goalStatus": null,
      "goalCategory": {
        "id": null
      },
      "goalCategoryOther": null,
      "midYearRatingSelf": null,
      "midYearCommentsSelf": null,
      "midYearRatingManager": null,
      "midYearCommentsManager": null,
      "fullYearRatingSelf": null,
      "fullYearCommentsSelf": null,
      "fullYearRatingManager": null,
      "fullYearCommentsManager": null
    }
  }
  getCycleData(){
    this._api.put(`/performance/add-or-update-goal/userPerformanceCycleId/`+ this.userPerformanceCycleId, this.goalData).subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }

  addGoal(){
    this._api.put(`/performance/add-or-update-goal/userPerformanceCycleId/`+ this.userPerformanceCycleId, this.goalData).subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }

  submitGoals(){
    this._api.put(`/performance/submit-goals/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }  
  submitMidYear(){
    this._api.put(`/performance/submit-mid-year-review/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }
  submitFullYear(){
    this._api.put(`/performance/submit-full-year-review/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }
  selectCompareFunction(item1: any, item2: any) {
    if (item1 == null || item2 == null) {
      return false;
    }
    return item1.id == item2.id;
  }
}
