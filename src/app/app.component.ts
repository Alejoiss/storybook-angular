import { Component, HostListener } from '@angular/core';

import { story1, story2 } from './stories/stories';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    story = story1;

    @HostListener('window:keydown', ['$event']) trocaStory(e: KeyboardEvent): void {
        if (!e.altKey) {
            return;
        }

        if (e.keyCode === 188) {
            this.story = story2;
        }

        if (e.keyCode === 190) {
            this.story = story1;
        }
    }
}
