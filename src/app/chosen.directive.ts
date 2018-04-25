import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[chosen]'
})
export class ChosenDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { }

  ngOnInit(){
    // Use renderer to render the emelemt with styles
      console.log(this.el);
      //this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
  }
}
