# Node.js notes

## Autoreload

```
npm install -g nodemon
nodemon server.js
```

## Import 

CommonJS way
```
module.exports.foo = 1
const foo = require('file')
```

ECMAScript module way
```
export const m = 1;
import {m} from “foo”;
```
