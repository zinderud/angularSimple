import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class AppComponent implements OnInit {

    public Liste: any[] = [

        {
            name: 'Bird',
            instructions: 'This beautiful traditional origami bird is actually quite easy to make, and if you fold the feet at just the right angle, it will stand up! For the best looking bird, you can use paper thats coloured on both sides: but white on the bird still looks nice if you dont have any double sided paper.',
            imagedata: 'data:image/jpeg;base64,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'
        },
           {
            name: 'Jumping Frog ',
            instructions: 'o make the frog jump to its best potential, use paper thats a bit thicker. You will need to use rectangular paper for this model',
            imagedata: 'data:image/jpeg;base64,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'
        },

    ]

    ngOnInit() { }
}