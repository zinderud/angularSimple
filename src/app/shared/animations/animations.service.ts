import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()

export class AnimationsService {

    //observable source
    private activateAnimation = new Subject<boolean>();
    //observable stream
    public activateAnimation$ = this.activateAnimation.asObservable();

    // service message commands
    announceMission(value: boolean) {
        if (!value) {
            setTimeout(() => {
                this.activateAnimation.next(value);
            }, 0);
        }
        else {
            this.activateAnimation.next(value);
        }
    }



}

