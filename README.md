## Installation

`spinner` is available via [npm](https://www.npmjs.com/package/@accubits/spinner)

Using npm:
```bash
$ npm install @accubits/spinner --save
```

## Usage

Import `SpinnerModule` in  in the root module(`AppModule`):
```typescript
// Import library module
import { SpinnerModule } from '@accubits/spinner';

@NgModule({
  imports: [
    // ...
    SpinnerModule
  ]
})
export class AppModule { }
```

Add `SpinnerService` service wherever you want to use the `ngx-spinner`.
```typescript
import { SpinnerService } from '@accubits/spinner';

class AppComponent implements OnInit {
  constructor(private spinner: SpinnerService) { }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }
}
```

Now use in your template
```html
<ab-spinner></ab-spinner>
```

## Spinner Service

- `SpinnerService.show()`  Shows the spinner
- `SpinnerService.hide()`  Hides the spinner

## Spinner Component

```html
<ab-spinner
  backgroundColor="#00000066">
</ab-spinner>
```
