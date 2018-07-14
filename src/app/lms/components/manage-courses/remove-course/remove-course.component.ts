import { ApiService } from './../../../../services/api.service';
import { ViewContainerRef } from '@angular/core';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { UserLookupComponent } from '../../user-lookup/user-lookup.component';

@Component({
  selector: 'app-remove-course',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.scss']
})
export class RemoveCourseComponent implements OnInit {
  componentRef: any;
  selectedUser: any;
  courses: any;
  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }


  lookup(which: string) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      UserLookupComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.selectUser.subscribe((data) => {
      this.selectUser(data);
    });

    this.componentRef.instance.closeModal.subscribe(() => {
      this.closeModal();
    });
  }



  selectUser(data) {
    this.selectedUser = [data];
    this.closeModal();
    this.getUserCourses();
  }

  getUserCourses() {
    this.api.get(`/user-course/userId/${this.selectedUser[0].id}`, {}, true).subscribe(
      (data) => {
        this.courses = data;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  closeModal() {
    this.componentRef.instance.selectUser.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
  }

  removeCourse(course, index) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this.api.delete(`/user/remove-course-from-user/userId/${this.selectedUser[0].id}/courseId/${course.id}`).subscribe(
      (data) => {
        this.alert.success("Course successfully removed");
        this.courses.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }
}
