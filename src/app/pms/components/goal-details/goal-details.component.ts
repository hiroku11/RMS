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
  @Input() isManager:boolean;

  goalData:any;
  goalNo: number;
  dropDownsData:any;
  count:number=1;
  data:any;
  isEdit:boolean=false;
  isMidYear:boolean=false;
  isFullYear:boolean=false;
  obj={
    "id": null,
    "userPerformanceCycle": null,
    "goal": null,
    "actionPlan": null,
    "goalSetDate": null,
    "plannedCompletionDate": null,
    "actualCompletedDate": null,
    "goalStatus": {
      "id":"DRAFT"},
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
    "isEdit":false
  }
  // goals={
  //   performanceGoals:[
  //     {
           
  //     }
  //   ]
  // }
  goals:any;
  
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService,
    private _sharedService: SharedService) {
      // this.goals.performanceGoals.push(this.obj);
      this.dropDownsData = this._sharedService.pmsDropDownnsData;
      if (!this._sharedService.pmsDropDownnsData.category) {
        this._sharedService.getPmsDropdownsData();
      }
      this._sharedService.pmsDropDownService.subscribe((data) => {
        this.dropDownsData = data;
      })
   }

  ngOnInit() {
    console.log(this.isManager)
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
  ngOnChanges(cycle){
    this.goals = this.cycle;
   
    if(this.goals){
      this.isMidYear = this.goals.performanceCycleMidYearStatus == 'N' ? false :true ;
      this.isFullYear = this.goals.performanceCycleFullYearStatus == 'N' ? false :true;
      this.goalData = {
        performanceGoals: this.goals.performanceGoals
      }
    }
    
    // this.isManager = this.isManager;
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
        this._alert.error(error);
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
    goal.userPerformanceCycle = this.userPerformanceCycleId.toString();
    goal.id = this.cycle.performanceCycleId;
    this._api.put(`/performance/update-goal/userPerformanceCycleId/`+ this.userPerformanceCycleId,goal).subscribe(
      (data)=>{
        this._alert.success("Goal saved successfully");
      },(error)=>{
        this._alert.error(error);
      }
    )
  }

  saveGoals(){
    this._api.put(`/performance/update-goal/userPerformanceCycleId/`+ this.userPerformanceCycleId,this.goalData).subscribe(
      (data)=>{
        this._alert.success("Goals saved successfully");
      },(error)=>{
        this._alert.error(error);
      }
    )
  }


  submitGoals(){
    this._api.put(`/performance/submit-goals/userPerformanceCycleId/`+ this.userPerformanceCycleId,this.goalData).subscribe(
      (data)=>{
        this._alert.success("Goals submitted successfully");
      },(error)=>{
        this._alert.error(error);
      }
    )
  }  
  submitMidYear(){
    this._api.put(`/performance/submit-mid-year-review/userPerformanceCycleId/`+ this.userPerformanceCycleId,this.goalData).subscribe(
      (data)=>{
        this._alert.success("Mid year cycle submitted successfully");
      },(error)=>{
        this._alert.error(error);
      }
    )
  }
  submitFullYear(){
    this._api.put(`/performance/submit-full-year-review/userPerformanceCycleId/`+ this.userPerformanceCycleId,this.goalData).subscribe(
      (data)=>{
        this._alert.success("Full year cycle submitted successfully");
      },(error)=>{
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
