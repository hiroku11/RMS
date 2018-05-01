import { Component, OnInit, Input } from '@angular/core';
import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent implements OnInit {
  @Input() userPerformanceCycleId: number;
  goalData:any;
  goal:any;
  constructor(private route: ActivatedRoute, private _api: ApiService, private _alert: AlertsLoaderService, private userService: UserService) {
  
   }

  ngOnInit() {
    this.getCycleData()
  }
  getCycleData(){
    this._api.put(`/performance/add-or-update-goal/userPerformanceCycleId/`+ this.userPerformanceCycleId, this.goalData).subscribe(
      (data)=>{
        this.goalData = data.employeePerformanceCycles;
      },(error)=>{

      }
    )
  }
}
