# Spinner

A Library to easily create your own custom loaders for pages. The spinner allows create your own HTML and use the SpinnerService to control it in your whole project.

## Demo

View the demo [here](http://52.220.41.10/spinner)

## Installation

Install `spinner` via [npm](https://www.npmjs.com/package/@accubits/spinner)

```bash
$ npm install @accubits/spinner --save
```

## Usage

Import `SpinnerModule` in  in the root module:
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

Add `SpinnerService` where you want to use the `spinner`.
```typescript
import { SpinnerService } from '@accubits/spinner';

class ExampleComponent implements OnInit {

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

- `SpinnerService.show()`  
- `SpinnerService.hide()`  

## Custom  HTML

```html
<ab-spinner type="custom">
  <p class="spinner">
    <img src="assets/images/loader.gif" />
    <span>LOADER....</span>
  </p>
</ab-spinner>
```

## Additional Options

Go to [GITHUB](https://github.com/accubits/spinner) for more options

