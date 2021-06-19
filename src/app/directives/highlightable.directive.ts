import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightable]'
})
export class HighlightableDirective {

  @Input() appHighlightable = 'shadow';

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
    ) {}

  @HostListener( 'mouseenter')
  onMouseEnter() {
    //this.el.nativeElement.classList.add('shadow');
    this.renderer.addClass(this.el.nativeElement, this.appHighlightable);
  }

  @HostListener( 'mouseleave')
  onMouseLeave() {
    //this.el.nativeElement.classList.remove('shadow');
    this.renderer.removeClass(this.el.nativeElement, this.appHighlightable);
  }

}
