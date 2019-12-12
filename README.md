
# Lazy Load

 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 
###  Secure local storage using secure-ls (https://github.com/softvar/secure-ls)


### Set paths in tsconfig for log relative location of file.

  
customers.component.ts
```
 import { DataService } from "@Data/data.service"; ```
``` 
tsconfig.json: 
```
"paths": {
"@Data/*": [
"./src/app/customers/sub-customers/macro-cusmtomers/*"
]
},
```