import { AlertsLoaderService } from './../../../services/alerts-loader.service';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';
@Component({
  selector: 'app-manage-templates',
  templateUrl: './manage-templates.component.html',
  styleUrls: ['./manage-templates.component.scss']
})
export class ManageTemplatesComponent implements OnInit {
  templates: any;
  itemsCount = 0;
  template = new FormData();
  fileDescription: string;
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "teamName",
        order: "ASC"
      }
    ],
    filters: []
  };
  constructor(private api: ApiService, private alert: AlertsLoaderService) { }

  ngOnInit() {
    this.getTemplatesList();
  }
  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getTemplatesList();
  }

  fileSelected($event) {
    this.template.append('file', $event.target.files[0]);
  }

  addTemplate() {
    this.template.append('fileDescription', this.fileDescription);
    this.api.post(`/import-template/save-import-template`, this.template, true).subscribe(
      (data) => {
        this.alert.success('Template added successfully');
        this.templates.push(data);
        this.fileDescription = null;
        this.template = new FormData();
        (document.getElementById('templateFile') as any).value = null;
      }, (error) => {
        this.alert.error(error);
      }
    )

  }
  getTemplatesList() {
    this.api.get(`/import-template/search-import-templates`).subscribe(
      (data) => {
        this.itemsCount = data.totalRecords;
        this.templates = data.importTemplates;
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  deleteTemplate(temp: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this.api.delete(`/import-template/delete-import-template/id/${temp.id}`).subscribe(
      (data) => {
        this.alert.success('Template deleted successfully');
        this.templates.splice(index, 1);
      }, (error) => {
        this.alert.error(error);
      }
    )
  }

  downloadTemplate(temp: any) {
    this.api.get(`//import-template/download-import-template/id/${temp.id}`, {}, true, true).subscribe(
      data => {
        this.saveFile(data, temp.originalFileName);
      },
      error => {
        this.alert.error("Some error occured while download template.");
        console.log(error);
      }
    )
  }

  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }

}
