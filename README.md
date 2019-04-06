## Installation

Install `spinner` via [npm](https://www.npmjs.com/package/@accubits/spinner)

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

Add `SpinnerService` service where you want to use the `spinner`.
```typescript
import { SpinnerService } from '@accubits/spinner';

class AppComponent implements OnInit {
  constructor(private spinner: SpinnerService) { }

  ngOnInit() {
    
    this.spinner.show();

    setTimeout(() => {
       
        this.spinner.hide();
    }, 3000);
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
