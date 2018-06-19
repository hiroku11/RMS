import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[httpAction]'
})
export class HttpActionDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
