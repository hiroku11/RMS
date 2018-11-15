import { SmMenuComponent } from './components/sm-menu/sm-menu.component';
import { PaginationModule } from 'ngx-pagination-bootstrap';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CoreComponentsModule } from './../core.components.module/core.components.module';
import { HeaderComponent } from './../core.components.module/component/header/header.component';
import { FormsModule } from '@angular/forms';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { NotifyAdminComponent } from './components/notify-admin/notify-admin.component';
import { AddDocumentComponent } from './components/document/add-document/add-document.component';
import { DocumentComponent } from './components/document/document.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { PublishEmailComponent } from './components/publish-email/publish-email.component';
import { CmsRoutingModule } from './cms.routing.module';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { UserLookupComponent } from './components/user-lookup/user-lookup.component';
import { SelectDropDownModule } from "ngx-select-dropdown";
import { SearchComponent } from './components/search/search.component';



export const MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm:ss',
    fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
    datePickerInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
    imports: [CommonModule, FormsModule, CoreComponentsModule, CmsRoutingModule,
        OwlDateTimeModule, OwlMomentDateTimeModule, PaginationModule, SelectDropDownModule
    ],
    exports: [UserLookupComponent],
    declarations: [DocumentComponent, DocumentListComponent, AddDocumentComponent,
        NotifyAdminComponent, PublishEmailComponent, SendEmailComponent, SideNavComponent,
         UserLookupComponent, SearchComponent, SmMenuComponent
    ],
    providers: [{ provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS }],
    entryComponents: [UserLookupComponent, SearchComponent]
   
})
export class CmsModule {

}