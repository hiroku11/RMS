import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
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
  @Input() isManager: boolean;

  goalData: any;
  goalNo: number;
  dropDownsData: any;
  data: any;
  isMidYear: boolean = false;
  isFullYear: boolean = false;
  newGoal = {
    "id": null,
    "userPerformanceCycle": null,
    "goal": null,
    "actionPlan": null,
    "goalSetDate": null,
    "plannedCompletionDate": null,
    "actualCompletedDate": null,
    "goalStatus": {
      "id": "DRAFT"
    },
    "goalCategory": null,
    "goalCategoryOther": null,
    "midYearRatingSelf": null,
    "midYearCommentsSelf": null,
    "midYearRatingManager": null,
    "midYearCommentsManager": null,
    "fullYearRatingSelf": null,
    "fullYearCommentsSelf": null,
    "fullYearRatingManager": null,
    "fullYearCommentsManager": null,
    "isEdit": false
  }
  goals: any;
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService,
    private _sharedService: SharedService) {
    // this.goals.performanceGoals.push(this.obj);
    this._sharedService.pmsDropDownService.subscribe((data) => {
      this.dropDownsData = data;
    });
    this.dropDownsData = this._sharedService.pmsDropDownnsData;
    if (!this._sharedService.pmsDropDownnsData.category) {
      this._sharedService.getPmsDropdownsData();
    }

  }

  ngOnInit() {
    this.cycle.performanceGoals.map(function (d) {
      d.isEdit = true
    });
    this.goals = this.cycle.performanceGoals;
    this.isMidYear = this.cycle.performanceCycleMidYearStatus == 'N' ? false : true;
    this.isFullYear = this.cycle.performanceCycleFullYearStatus == 'N' ? false : true;
    // if(!this.cycle){}
    // this.goalData = {
    //   performanceGoals: this.cycle.performanceGoals
    // }
    // this.route.params.subscribe((params: Params) => {		
    //         let userId = params["name"];	
    //         if (userId) {	

    //           this.isManager=true;		
    //         }
    //         else{
    //           userId = this.userService.userDetails.loginId;
    //         }
    //         this.getUserPerfomanceCycle(this.userPerformanceCycleId,userId);
    //       });
    // this.initGoalData();
    // this.goals.performanceGoals[this.goals.performanceGoals.length] = this.obj;

    //this.goals.performanceGoals.push(this.obj);
    // console.log(this.goals);

  }
  // getCycleData() {
  //   this._api.put(`/performance/addorupdategoal/userPerformanceCycleId/` + this.userPerformanceCycleId, this.goalData).subscribe(
  //     (data) => {
  //       this.goalData = data.employeePerformanceCycles;
  //     }, (error) => {
  //       this._alert.error(error);
  //     }
  //   )
  // }
  getUserPerfomanceCycle(id: number, userId: string) {
    this._api.get(`/performance/employee-sub-view/userLoginId/${userId}/userPerformanceCycleId/${id}`).subscribe(
      (data) => {
        this.goals = data;

      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  addGoal() {
    this.goals.push({ ...this.newGoal });
  }

  saveGoal(goal: any) {
    this._api.put(`/performance/add-or-update-goal/userPerformanceCycleId/${this.userPerformanceCycleId}`, { ...goal }).subscribe(
      (data) => {
        this.cycle = data;
        this.goals = data.performanceGoals;
        this.goals.forEach(element => {
          element.isEdit = true;
        });
        this._alert.success("Goal saved successfully");
        this.update.emit(this.cycle);
      }, (error) => {
        this._alert.error(error);
      }
    )
  }

  saveGoals() {
    this._api.put(`/performance/add-or-update-goals/userPerformanceCycleId/${this.userPerformanceCycleId}`, { performanceGoals: this.goals }).subscribe(
      (data) => {
        this._alert.success("Goals saved successfully");
      }, (error) => {
        this._alert.error(error);
      }
    )
  }


  submitGoals() {
    this._api.put(`/performance/submit-goals/userPerformanceCycleId/` + this.userPerformanceCycleId, this.goalData).subscribe(
      (data) => {
        this._alert.success("Goals submitted successfully");
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  submitMidYear() {
    this._api.put(`/performance/submit-mid-year-review/userPerformanceCycleId/` + this.userPerformanceCycleId, this.goalData).subscribe(
      (data) => {
        this._alert.success("Mid year cycle submitted successfully");
      }, (error) => {
        this._alert.error(error);
      }
    )
  }
  submitFullYear() {
    this._api.put(`/performance/submit-full-year-review/userPerformanceCycleId/` + this.userPerformanceCycleId, this.goalData).subscribe(
      (data) => {
        this._alert.success("Full year cycle submitted successfully");
      }, (error) => {
        this._alert.error(error);
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
