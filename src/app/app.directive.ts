import { Directive, ElementRef,OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class Highlight implements OnInit {
    constructor(private elementRef: ElementRef){}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgrondStyle = 'green'
    }
}