import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[MenuButton]'
})
export class MenuButtonDirective {

  @Input() MenuButton: string;

  constructor(public el: ElementRef, public renderer: Renderer) {}

  ngOnInit(){
    console.log(this.MenuButton);
    this.el.nativeElement.addEventListener("click", (event) => {
      console.log("clicked", event);
    });

    //this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    
}

}
