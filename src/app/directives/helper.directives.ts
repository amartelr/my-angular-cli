import { Directive, ElementRef, Input, Renderer } from '@angular/core';


@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}


@Directive({ selector: '[myHighlight2]' })

export class HighlightDirective2 {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
    }
}