import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
    selector: 'appHighlightText, [hello]',
})

export class HighlightTextDirective implements OnInit {
    constructor(
        private element: ElementRef
    ) { }


    ngOnInit(): void {
        // (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'Green';
        ((this.element.nativeElement) as HTMLElement).style.backgroundColor = 'Green';
    }
}