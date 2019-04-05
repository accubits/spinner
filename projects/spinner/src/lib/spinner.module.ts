import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
      CommonModule
  ],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
