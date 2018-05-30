import { LmsRoutingModule } from './lms.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';

@NgModule({
    declarations: [DashboardComponent, SideNavComponent, SmMenuComponent],
    imports: [CommonModule, FormsModule, CoreComponentsModule, LmsRoutingModule],
    providers: []
})
export class LmsModule { }
