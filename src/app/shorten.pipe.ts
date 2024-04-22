import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten',
})
export class ShortenPipe implements PipeTransform{
    transform(value: any,start:number = 0, end:number =0, ...args: any[]) {
        if(start >0 && end>0) return value.substr(start,end)
        return value.substr(0,10)
    }
}