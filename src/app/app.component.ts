import { Component } from '@angular/core';
// import { SpinnerService } from '@accubits/spinner';
import { SpinnerService } from '../../dist/spinner';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'spinner-lib';

    public bgColor = '#00000066';
    public color = '#ffffff';
    public loaderType = 'ripple';
    public loadingText = 'Loading...';
    public customContent = '<p class="spinner"><span>hello world!!!</span></p>';

    constructor(
        private spinnerService: SpinnerService
    ) {

    }

    show() {
        this.spinnerService.show();
        setTimeout(() => {
            this.spinnerService.hide();
        }, 3000);
    }
}
