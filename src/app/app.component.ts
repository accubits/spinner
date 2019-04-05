import {Component} from '@angular/core';
import {SpinnerService} from 'spinner';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'spinner-lib';

    constructor(
        private spinnerService: SpinnerService
    ) {
        this.spinnerService.show();

        setTimeout(() => {
            this.spinnerService.hide();
        }, 5000);
    }

    show() {
        this.spinnerService.show();

        setTimeout(() => {
            this.spinnerService.hide();
        }, 5000);
    }
}
