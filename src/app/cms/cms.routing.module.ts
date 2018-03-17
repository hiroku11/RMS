import { NotifyAdminComponent } from './components/notify-admin/notify-admin.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { AddDocumentComponent } from './components/document/add-document/add-document.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document/document-list/document-list.component';
import { PublishEmailComponent } from './components/publish-email/publish-email.component';
import { UserService } from '../services/user.service';


const cmsRoutes: Routes = [
    { path: '', redirectTo:"document"},
    {
        path: 'document', component: DocumentComponent,
        children: [
              { path: '', component: DocumentListComponent, pathMatch: 'full' },
              { path: 'document-list', component: DocumentListComponent, pathMatch: 'full' },
              { path: 'add-document', component: AddDocumentComponent, pathMatch: 'full' },
              { path: 'send-email', component: SendEmailComponent, pathMatch: 'full' },
              { path: 'publish-email', component: PublishEmailComponent, pathMatch: 'full' },
              { path: 'notify-admin', component: NotifyAdminComponent, pathMatch: 'full' },
        ], canActivate: [UserService]
  },
]

@NgModule({
    imports: [
        RouterModule.forChild(cmsRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class CmsRoutingModule { }