import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Directives } from './directives/';
import { AnimationsService } from './animations/animations.service';


@NgModule({
    imports: [BrowserModule],
    declarations: [...Directives,],
    exports: [...Directives,],
    providers: [AnimationsService]
})
export class SharedModule { }