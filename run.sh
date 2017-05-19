#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build
ng build --prod

ngu-app-shell --module src/app/app.module.ts  \
              --url /loading \
              --insert-module src/app/loading.module.ts \
              --out dist/index.html

ngu-sw-manifest --module src/app/app.module.ts \
                --out dist/ngsw-manifest.json

# http2 push
ngu-firebase-push --module src/app/app.module.ts

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Serve
cd dist
http-server
