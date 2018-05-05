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
  count:number=1;
  data:any;
  obj={
    "id": null,
    "userPerformanceCycle": null,
    "goal": null,
    "actionPlan": null,
    "goalSetDate": null,
    "plannedCompletionDate": null,
    "actualCompletedDate": null,
    "goalStatus": null,
    "goalCategory": null,
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
  goals={
    performanceGoals:[
      {
           
      }
    ]
  }
  
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService,
    private _sharedService: SharedService) {
      this.goals.performanceGoals.push(this.obj);
      this.dropDownsData = this._sharedService.pmsDropDownnsData;
      if (!this._sharedService.pmsDropDownnsData.category) {
        this._sharedService.getPmsDropdownsData();
      }
      this._sharedService.pmsDropDownService.subscribe((data) => {
        this.dropDownsData = data;
      })
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {		
            let userId = params["name"];	
            if (userId) {	
              this.getUserPerfomanceCycle(this.userPerformanceCycleId,userId);		
            }
          });
    // this.getCycleData()
    this.initGoalData();
    this.goals.performanceGoals[this.goals.performanceGoals.length] = this.obj;

    //this.goals.performanceGoals.push(this.obj);
    console.log(this.goals);

  }
  initGoalData(){
    this.goals={
      performanceGoals:[
        {
             
        }
      ]
    }
   
  }
  getCycleData(){
    this._api.put(`/performance/addorupdategoal/userPerformanceCycleId/`+ this.userPerformanceCycleId, this.goalData).subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }
   getUserPerfomanceCycle(id: number, userId: string) {
   this._api.get(`/performance/employee-sub-view/userLoginId/${userId}/userPerformanceCycleId/${id}`).subscribe(
     (data) => {
       this.goals = data;
     }, (error) => {
       this._alert.error(error);
     }
   )
 }

  addGoal(){
    this.count++;
   
    this.goals.performanceGoals.push(this.obj);
  }
  
  saveGoal(goal:any){
    this._api.put(`/performance/updategoal/userPerformanceCycleId/`+ this.userPerformanceCycleId,goal).subscribe(
      (data)=>{
        // this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }

  submitGoals(){
    this._api.put(`/performance/submitgoals/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }  
  submitMidYear(){
    this._api.put(`/performance/submitmidyearreview/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }
  submitFullYear(){
    this._api.put(`/performance/submitfullyearreview/userPerformanceCycleId/`+ this.userPerformanceCycleId,'').subscribe(
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
