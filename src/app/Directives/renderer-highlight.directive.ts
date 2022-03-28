import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'blue';
  @Input() highlightColor:string = 'yellow';
  
  @HostBinding('style.backgroundColor') color: string = '';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    
    // through @HostListner
    // this.renderer.setStyle(
    //   this.element.nativeElement, 
    //   'backgroundColor', 
    //   'blue'
    // );

    // through @Hostbinding
    //this.color = 'blue';

    // through @Input()
    this.color = this.defaultColor;

  }

  @HostListener('click') onclick(event: Event) {

    // through @HostListner
    // this.renderer.setStyle(
    //   this.element.nativeElement, 
    //   'backgroundColor', 
    //   'yellow'
    // );
    
    // through @Hostbinding
    //this.color = 'yellow';

    // through @Input()
    this.color = this.highlightColor;

  }


}
