import { LmsRoutingModule } from './lms.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ProgressComponent } from './components/progress/progress.component';
import { UserCourseDetailComponent} from './components/user-course-detail/user-course-detail.component';
@NgModule({
    declarations: [DashboardComponent, SideNavComponent, SmMenuComponent,
        CoursesComponent,ProgressComponent,UserCourseDetailComponent],
    imports: [CommonModule, FormsModule, CoreComponentsModule, LmsRoutingModule],
    providers: []
})
export class LmsModule { }
