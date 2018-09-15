import { AddOtherAssetsComponent } from './components/other/add-other-assets/add-other-assets.component';
import { OtherAssetsListComponent } from './components/other/other-assets-list/other-assets-list.component';
import { OtherComponent } from './components/other/other.component';
import { AddVehicleComponent } from './components/vehicle/add-vehicle/add-vehicle.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AddEquipmentComponent } from './components/equipment/add-equipment/add-equipment.component';
import { EquipmentListComponent } from './components/equipment/equipment-list/equipment-list.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AddBuildingComponent } from './components/building/add-building/add-building.component';
import { BuildingListComponent } from './components/building/building-list/building-list.component';
import { BuildingComponent } from './components/building/building.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './../services/user.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficeAddressLookupComponent } from './components/office-address-lookup/office-address-lookup.component';


const amsRoutes: Routes = [
      { path: '', component: DashboardComponent,canActivate:[UserService]},
      { path: 'dashboard', component: DashboardComponent,canActivate:[UserService]},
      { path: 'buildings', component: BuildingComponent,
            children:[
                  {path: '',component: BuildingListComponent , pathMatch: 'full'},
                  {path: 'add-building',component: AddBuildingComponent , pathMatch: 'full'},
                  {path:'edit-building/:id',component: AddBuildingComponent , pathMatch: 'full'}
            ],canActivate:[UserService]
      },
      { path: 'equipments', component: EquipmentComponent,
            children:[
                  {path: '',component: EquipmentListComponent , pathMatch: 'full'},
                  {path: 'add-equipment',component: AddEquipmentComponent , pathMatch: 'full'},
                  {path:'edit-equipment/:id',component: AddEquipmentComponent , pathMatch: 'full'}
            ],canActivate:[UserService]
      },
      { path: 'vehicles', component: VehicleComponent,
            children:[
                  {path: '',component: VehicleListComponent , pathMatch: 'full'},
                  {path: 'add-vehicle',component: AddVehicleComponent , pathMatch: 'full'},
                  {path:'edit-vehicle/:id',component: AddVehicleComponent , pathMatch: 'full'}
            ],canActivate:[UserService]
      },
      { path: 'others', component: OtherComponent,
            children:[
                  {path: '',component: OtherAssetsListComponent , pathMatch: 'full'},
                  {path: 'add-other-asset',component: AddOtherAssetsComponent , pathMatch: 'full'},
                  {path:'edit-other-asset/:id',component: AddOtherAssetsComponent , pathMatch: 'full'}
            ],canActivate:[UserService]
      }
];

@NgModule({
      imports: [
        RouterModule.forChild(amsRoutes) 
      ],
      exports: [RouterModule],
      providers:[]
})
export class AmsRoutingModule { }


