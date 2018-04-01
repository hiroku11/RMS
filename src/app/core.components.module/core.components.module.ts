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
import { NgxSlidesModule } from 'ngx-slides';





@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, NgxSlidesModule],
    exports: [HeaderComponent,SuccessMessageComponent,AjaxLoaderComponent, ErrorMessageComponent,
        LoginComponent, HttpActionDirective, SearchFilterPipe, HomeComponent],
    declarations: [HeaderComponent,SuccessMessageComponent,AjaxLoaderComponent, ErrorMessageComponent,
        LoginComponent, HttpActionDirective, SearchFilterPipe, HomeComponent
    ],
    entryComponents:[SuccessMessageComponent,AjaxLoaderComponent, ErrorMessageComponent]
})
export class CoreComponentsModule {

}