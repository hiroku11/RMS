import { LmsRoutingModule } from './lms.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { CourseComponent } from './components/courses/course.component';
import { CourseListComponent} from './components/courses/course-list/course-list.component';
import { MyCoursesComponent } from './components/mycourses/mycourses.component'
import { ProgressComponent } from './components/progress/progress.component';
import { CourseDetailComponent} from './components/courses/course-detail/course-detail.component';
import { UserCourseDetailComponent} from './components/user-course-detail/user-course-detail.component';
@NgModule({
    declarations: [DashboardComponent, SideNavComponent, SmMenuComponent,
        CourseComponent,MyCoursesComponent,ProgressComponent,UserCourseDetailComponent,CourseDetailComponent,
        CourseListComponent],
    imports: [CommonModule, FormsModule, CoreComponentsModule, LmsRoutingModule],
    providers: []
})
export class LmsModule { }
