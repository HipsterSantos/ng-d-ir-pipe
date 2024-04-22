import { Directive, ElementRef, OnInit, Renderer2, HostListener,HostBinding, Input } from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({
    selector: '[textMe]'
})

export class TextDirecitve implements OnInit{
    constructor(private model:NgModel, private currentElement: ElementRef, private renderTo: Renderer2){
    }
    @Input('defaultColor') defaultColor:string = 'red'
    @Input('highlightColor') highlight: string = ''
    @HostBinding('style.backgroundStyle') backgrondStyle: string = this.defaultColor
    @HostListener('mousemove',['$event.target']) onMouseMove(event: MouseEvent){
        //do something to the current element 
        this.backgrondStyle = this.highlight
    }
    ngOnInit(): void {
        this.renderTo.setStyle(this.currentElement,'','')
        // this.model.
    }
    
}