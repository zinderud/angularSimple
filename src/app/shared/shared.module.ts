import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';
import { Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { Directives } from './directives/';

import { AnimationsService } from './animations/animations.service';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
         MaterialModule,
        FlexLayoutModule,
         MomentModule
    ],
    declarations: [...Directives,],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        MaterialModule,
        FlexLayoutModule,
        
        MomentModule,
        Ng2Webstorage,
        ...Directives,],
    providers: [
        AnimationsService, 
     MdIconRegistry]
})
export class SharedModule { }