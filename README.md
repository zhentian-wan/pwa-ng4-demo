#PWA-NG¤-DEMO

### Install:

```bash
npm i -g yarn http-server @angular/cli@latest
```

```bash
yarn add @angular/animations @angular/platform-server @angular/service-worker ng-pwa-tools web-push  
```

### Register service worker
in main.ts file:
```ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(( ) => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/worker-basic.min.js');
    }
  });

```

### Create a bash file
```bash
#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build
ng build --prod

# Create an app shell with only loading module
ngu-app-shell --module src/app/app.module.ts  \
              --url /loading \
              --insert-module src/app/loading.module.ts \
              --out dist/index.html

# Create manifest based on static files
ngu-sw-manifest --module src/app/app.module.ts \
                --out dist/ngsw-manifest.json

# http2 push
ngu-firebase-push --module src/app/app.module.ts

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Serve
cd dist
http-server
```

#### Loading Module

```ts
import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  template: `<h3>Loading...</h3>`
})
export class LoadingScreenComponent {}

@NgModule({
  declarations: [LoadingScreenComponent],
  imports: [
    RouterModule.forChild([
      {path: 'loading', component: LoadingScreenComponent},
    ])
  ]
})
export class LoadingModule {}

```
