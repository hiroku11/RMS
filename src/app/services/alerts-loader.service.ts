import { ErrorMessageComponent } from './../core.components.module/component/error-message/error-message.component';
import { SuccessMessageComponent } from './../core.components.module/component/sucess-message/sucess-message.component';
import { AjaxLoaderComponent } from './../core.components.module/component/ajax-loader/ajax-loader.component';
import { HttpActionDirective } from './../core.components.module/directives/http-action.directive';
import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef
} from "@angular/core";

@Injectable()
export class AlertsLoaderService {
    public httpActionIndicator: HttpActionDirective;
    public componentRef: any;
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector
    ) { }

    showLoader() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            AjaxLoaderComponent
        );
        let viewContainerRef = this.httpActionIndicator.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    }
    hideLoader() {
        this.componentRef.destroy();
    }
    success(message: string) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            SuccessMessageComponent
        );
        let viewContainerRef = this.httpActionIndicator.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.message = message;
        setTimeout(() => {
            this.hideLoader();
        }, 4000);
    }
    error(error: any) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            ErrorMessageComponent
        );
        let viewContainerRef = this.httpActionIndicator.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.message = this.getErrorMessage(error);
        setTimeout(() => {
            this.hideLoader();
        }, 4000)
    }

    getErrorMessage(error: any) {
        if (typeof error === 'string') {
            return error;
        }
        if (error.staus === 403) {
            return 'Your are not authorised to perform this action.'
        }
        if (error.status >= 400 && error.status < 500) {
            try {
                if (error.error.errorMessages[0].indexOf(":") == -1) {
                    return error.error.errorMessages[0]
                }
                return error.error.errorMessages[0].split(":")[1];
            } catch{
                return "Some error occured please try again.";
            }
        }
        if (error.status >= 500) {
            return "Some server error occured please try again.";
        }

    }
}
