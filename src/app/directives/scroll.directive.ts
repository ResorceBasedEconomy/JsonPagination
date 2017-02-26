import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myScrolling]' })
export class ScrollDirective {
    constructor(el: ElementRef) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
        }
    }
}

// onScroll(): void {
// if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         // you're at the bottom of the page
//     }
// }