import { NgModule, enableProdMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { env } from "../environments/prod.env";

if (env.produciton){
    enableProdMode()
}

@NgModule({
    declarations:[

    ],
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{
    constructor(){}
}