import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Component({
    selector: 'ab-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnInit {

    private subscription;
    public isVisible: Boolean = false;

    constructor(
        private spinnerService: SpinnerService
    ) {
        this.subscription = spinnerService.spinnerObservable.subscribe(data => {
            this.isVisible = data;
        });

    }

    ngOnInit() {
    }

}
