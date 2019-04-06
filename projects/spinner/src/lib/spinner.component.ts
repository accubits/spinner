import {Component, Input, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';
import {SPINNERS} from './spinner.enum';

@Component({
    selector: 'ab-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['spinner.component.css']
})
export class SpinnerComponent implements OnInit {

    @Input() backgroundColor = '#00000066';
    @Input() color = '#ffffff';
    @Input() type = 'ripple';
    @Input() loadingText = '';

    private subscription;
    public isVisible: Boolean = false;
    public divArray = [];
    public spinnerClass = 'ripple';

    constructor(
        private spinnerService: SpinnerService
    ) {
        this.subscription = spinnerService.spinnerObservable.subscribe(data => {
            this.isVisible = data;
        });

    }

    ngOnInit() {
        this.initSpinner();
    }

    getClass() {
        const divCount = SPINNERS[this.type];
        this.divArray = Array(divCount);

        return 'ab-' + this.type;
    }

    initSpinner() {
        this.spinnerClass = this.getClass();
    }

}
