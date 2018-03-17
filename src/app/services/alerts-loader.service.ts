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
    ) {}

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
        setTimeout(()=>{
            this.hideLoader();
        },2000);
    }
    error(message: string) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            ErrorMessageComponent
        );
        let viewContainerRef = this.httpActionIndicator.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
        this.componentRef.instance.message = message;
        setTimeout(()=>{
            this.hideLoader();
        },2000)
    }
}
