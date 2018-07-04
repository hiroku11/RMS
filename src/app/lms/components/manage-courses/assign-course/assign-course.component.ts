import { UserLookupComponent } from './../../user-lookup/user-lookup.component';
import { ApiService } from './../../../../services/api.service';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CourseLookupComponent } from '../../course-lookup/course-lookup.component';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.scss']
})
export class AssignCourseComponent implements OnInit {
  selectedCourses: any[] = [];
  profiles = [];
  selectedUser: any[] = [];
  users = [];
  componentRef: any;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }

  lookup(which: string) {
    let comp: any = which === 'user' ? UserLookupComponent : CourseLookupComponent;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      comp
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    if (which === 'user') {
      this.componentRef.instance.selectUser.subscribe((data) => {
        this.selectUser(data);
      });
    } else {
      this.componentRef.instance.selectCourse.subscribe((data) => {
        this.selectCourse(data);
      });
    }
    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }

  selectCourse(data) {
    this.selectedCourses.push(data);
    this.selectedCourses = [...this.selectedCourses];
  }

  selectUser(data) {
    this.selectedUser = [data];
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

  addCoursesToUser() {
    this.api.put(`/user/add-courses-to-user/userId/${this.selectedUser[0].id}`, { courses: this.selectedCourses }).subscribe(
      (data) => {
        this.alert.success("Courses successfully assigned to user.");
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  clear() {
    this.selectedCourses = [];
    this.selectedUser = [];
  }

}
