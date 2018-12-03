import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-courses',
  templateUrl: './import-courses.component.html',
  styleUrls: ['./import-courses.component.scss']
})
export class ImportCoursesComponent implements OnInit {
  importData = new FormData();
  importResult: any;
  showImportSummary: boolean;
  filterText: string;
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
  }

  fileSelected($event) {
    this.importData.append('file', $event.target.files[0]);
  }
  import() {
    this.api.post(`/bulk-upload/courses/using-form-submit`, this.importData, true).subscribe(
      (data) => {
        this.showImportSummary = true;
        this.importData = data;
        this.alert.success('Courses imported successfully');
      }, (error) => {
        this.alert.error(error);
      }
    )

  }
}
