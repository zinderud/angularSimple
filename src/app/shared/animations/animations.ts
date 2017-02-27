import { OnDestroy, AfterViewInit } from '@angular/core';

import { AnimationsService } from './index';
/**
*  Animations
*/
export abstract class Animations implements OnDestroy, AfterViewInit {
    public activeAnimation = true;

    public constructor(protected animationsService: AnimationsService) { }

    public ngOnDestroy(): void {
        this.animationsService.announceMission(true);
    }
    public ngAfterViewInit(): void {
        this.animationsService.announceMission(false);
    }
}

