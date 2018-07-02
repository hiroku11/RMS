import { UserLookupComponent } from './component/user-lookup/user-lookup.component';
import { GiveFeedbackExternalComponent } from './component/give-feedback-external/give-feedback-external.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HomeComponent } from './component/home/home.component';
import { HttpActionDirective } from './directives/http-action.directive';
import { HeaderComponent } from './component/header/header.component';
import { AjaxLoaderComponent } from './component/ajax-loader/ajax-loader.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorMessageComponent } from './component/error-message/error-message.component';
import { SuccessMessageComponent } from './component/sucess-message/sucess-message.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PasswordResetComponent } from './component/password-reset/password-reset.component';
import { PostcodeLookupComponent } from './component/postcode-lookup/postcode-lookup.component';







@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [HeaderComponent, SuccessMessageComponent, AjaxLoaderComponent, ErrorMessageComponent,
        LoginComponent, HttpActionDirective, SearchFilterPipe, HomeComponent, SortByPipe, UserLookupComponent],
    declarations: [HeaderComponent, SuccessMessageComponent, AjaxLoaderComponent, ErrorMessageComponent,UserLookupComponent,
        LoginComponent, HttpActionDirective, SearchFilterPipe, HomeComponent, SortByPipe, GiveFeedbackExternalComponent, PasswordResetComponent, PostcodeLookupComponent
    ],
    entryComponents: [SuccessMessageComponent, AjaxLoaderComponent, ErrorMessageComponent, UserLookupComponent]
})
export class CoreComponentsModule {

}