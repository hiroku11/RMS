import { ProfileLookupComponent } from './components/profile-lookup/profile-lookup.component';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { RemoveCourseComponent } from './components/manage-courses/remove-course/remove-course.component';
import { AssignProfileComponent } from './components/manage-profiles/assign-profile/assign-profile.component';
import { AssignCourseComponent } from './components/manage-courses/assign-course/assign-course.component';
import { ManageCourseListComponent } from './components/manage-courses/manage-course-list/manage-course-list.component';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import { AddProfileComponent } from './components/manage-profiles/add-profile/add-profile.component';
import { ProfilesListComponent } from './components/manage-profiles/profiles-list/profiles-list.component';
import { ManageProfilesComponent } from './components/manage-profiles/manage-profiles.component';
import { AddCourseComponent } from './components/manage-courses/add-course/add-course.component';
import { ManageCoursesComponent } from './components/manage-courses/manage-courses.component';
import { LmsRoutingModule } from './lms.routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { CourseComponent } from './components/courses/course.component';
import { CourseListComponent } from './components/courses/course-list/course-list.component';
import { MyCoursesComponent } from './components/my-courses-data/mycourses/mycourses.component'
import { ProgressComponent } from './components/progress/progress.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { UserCourseDetailComponent } from './components/my-courses-data/user-course-detail/user-course-detail.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { RemoveProfileComponent } from './components/manage-profiles/remove-profile/remove-profile.component';
import { MyCoursesDataComponent } from './components/my-courses-data/my-courses-data.component';
import { CourseLookupComponent } from './components/course-lookup/course-lookup.component';

export const MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm:ss',
    fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
    datePickerInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
    declarations: [DashboardComponent, SideNavComponent, SmMenuComponent,
        CourseComponent, MyCoursesComponent, ProgressComponent, UserCourseDetailComponent,
        CourseDetailComponent, CourseListComponent, ManageCoursesComponent, AddCourseComponent,
        ManageProfilesComponent, ProfilesListComponent, AddProfileComponent, ManageCourseListComponent,
        AssignCourseComponent, AssignProfileComponent, RemoveCourseComponent, RemoveProfileComponent,
        MyCoursesDataComponent, UserLookupComponent, CourseLookupComponent, ProfileLookupComponent],
    imports: [CommonModule, FormsModule, CoreComponentsModule, LmsRoutingModule,
        SelectDropDownModule, PaginationModule, OwlDateTimeModule,
        OwlMomentDateTimeModule
    ],
    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }],
    entryComponents: [UserLookupComponent, CourseLookupComponent, ProfileLookupComponent]
})
export class LmsModule { }
