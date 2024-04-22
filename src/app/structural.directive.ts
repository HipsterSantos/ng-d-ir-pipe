import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'unlessThis'
})

export class unlessThis implements OnInit{
    constructor(private currentTemplate: TemplateRef<any>, private  currentContaer: ViewContainerRef){

    }
    @Input() set unlessThis(value:boolean){
        if (!value) this.currentContaer.createEmbeddedView(this.currentTemplate)
        else{
            this.currentContaer.clear()
        }
        // this.currentTemplate.createEmbeddedView().
    }
    ngOnInit(): void {
        
    }
}
//challenge to create ng if 
// challenge to create ng for 