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
    this.getDocuments();
  }

  ngOnInit() {
  }

  getDocuments() {
    this._apiService.get("/compliance/search-compliance-document-and-version-history", { Search: JSON.stringify(this.searchParams) }).subscribe(
      (data) => {
        this.documentsList = data.complianceDocuments;
        this.itemsCount = data.totalRecords;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPageData($event: any) {
    this.searchParams.paging.currentPage = $event.pageNo - 1;
    this.searchParams.paging.pageSize = $event.pageSize;
    this.getDocuments();
  }
  downloadDocument(doc: any) {
    this._apiService.get(`/document/download-document/${doc.id}`, {}, true, true).subscribe(
      data => {
        this.saveFile(data, doc.originalFileName);
      },
      error => {
        this._alertService.error("Some error occured while download document.");
        console.log(error);
      }
    )
  }

  saveFile(blobContent: any, fileName: string) {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  }

  deleteDocumnet(doc: any, index:number){
    this._apiService.delete(`/compliance/delete-compliance-document/complianceDocumentId/${doc.id}`,{}, true).subscribe(
      data => {
        this._alertService.success("Documnet deleted successfully");
        this.documentsList.splice(index,1);
      },
      error => {
        this._alertService.error("Some error occured while deleting document.");
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
    this.documentsList = $event.data.docs;
    this.searchParams = $event.searchParams;

}

}
