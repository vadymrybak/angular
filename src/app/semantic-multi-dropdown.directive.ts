import { Directive, ElementRef, Input, Renderer } from '@angular/core';
declare let $ : any;

@Directive({
  selector: '[SemanticMultiDropdown]'
})
export class SemanticMultiDropdownDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { }

  ngOnInit(){ 
    $(this.el.nativeElement).dropdown();
  }
}
