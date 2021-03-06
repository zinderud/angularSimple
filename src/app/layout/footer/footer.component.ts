
import { Component, OnInit } from '@angular/core';


@Component({
 
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public Liste: any[] = [

        {
            name: 'Bird',
            instructions: 'This beautiful traditional origami bird is actually quite easy to make, and if you fold the feet at just the right angle, it will stand up! For the best looking bird, you can use paper thats coloured on both sides: but white on the bird still looks nice if you dont have any double sided paper.',
            imagedata: '/assets/sade.jpg'
        },
           {
            name: 'Jumping Frog ',
            instructions: 'o make the frog jump to its best potential, use paper thats a bit thicker. You will need to use rectangular paper for this model',
            imagedata: '/assets/sade.jpg'
        }

    ]

    ngOnInit() { }
}