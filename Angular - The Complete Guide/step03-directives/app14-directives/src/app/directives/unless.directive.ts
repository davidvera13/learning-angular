import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // note we define a property but here we define its setter
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // clear
      this.viewContainerRef.clear();
    }
  };

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

}
