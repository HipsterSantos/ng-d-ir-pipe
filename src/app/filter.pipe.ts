import { Pipe, PipeTransform } from "@angular/core";
import { filter } from "rxjs";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value: any,filterValue: string, ...args: any[]) {
        return value.filter(c => c.status == filterValue)
    }
}