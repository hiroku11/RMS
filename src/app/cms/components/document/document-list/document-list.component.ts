import { ComponentFactoryResolver } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { AlertsLoaderService } from './../../../../services/alerts-loader.service';
import { ApiService } from './../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver/FileSaver';
import { SearchComponent } from './../../search/search.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documentsList: any = [];
  public componentRef: any;
  pageSize: number = 10;
  itemsCount: number = 0;
  searchText: string;
  reverse: boolean = false;
  keyName: string = 'documentId';
  searchParams: any = {
    paging: { currentPage: 0, pageSize: 10 },
    sorts: [
      {
        field: "documentTitle",
        order: "ASC"
      }
    ],
    filters: []
  };
  constructor(private _apiService: ApiService,
    private _alertService: AlertsLoaderService,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this._alertService.showLoader();
    this._apiService.get("/compliance/search-compliance-document-and-version-history",
      { Search: JSON.stringify(this.searchParams) }).subscribe(
        (data) => {
          this._alertService.hideLoader();
          this.documentsList = data.complianceDocuments;
          this.itemsCount = data.totalRecords;
        },
        (error) => {
          this._alertService.hideLoader();
          this._alertService.error(error);
          // console.log(error);
        }
      );
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getDocuments();
  }
  downloadDocument(doc: any) {
    this._apiService.get(`/compliance/download-compliance-document-history/id/${doc.versionHistoryId}`, {}, true, true).subscribe(
      data => {
        this.saveFile(data, doc.originalFileName);
      },
      error => {
        this._alertService.error("Some error occured while downloading document.");
        console.log(error);
      }
    )
  }

  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }

  deleteDocumnet(doc: any, index: number) {
    if (!window.confirm("Are you sure you want to delete this item/record?")) {
      return;
    }
    this._apiService.delete(`/compliance/delete-compliance-document/complianceDocumentId/${doc.id}`, {}, true).subscribe(
      data => {
        this._alertService.success("Documnet deleted successfully");
        this.documentsList.splice(index, 1);
      },
      error => {
        this._alertService.error(error);
        console.log(error);
      }
    )
  }

  advancedSearch() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      SearchComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentRef.instance.parentSearchParams = this.searchParams;
    this.componentRef.instance.searchResult.subscribe((data) => {
      this.advancedSearchResult(data);
    });
    this.componentRef.instance.closeModal.subscribe((searchParams: any) => {
      this.closeModal(searchParams);
    });
  }
  closeModal(searchParams: any) {
    this.componentRef.instance.searchResult.unsubscribe();
    this.componentRef.instance.closeModal.unsubscribe();
    this.componentRef.destroy();
    if (JSON.stringify(this.searchParams) == JSON.stringify(searchParams)) {
      this.getDocuments();
    }
  }

  advancedSearchResult($event: any) {
    this.itemsCount = $event.data.totalRecords;
    this.documentsList = $event.data.complianceDocuments;
    this.searchParams = $event.searchParams;

  }
  changeSort(keyName: string) {
    this.reverse = !this.reverse;
    this.keyName = keyName;
  }

}
