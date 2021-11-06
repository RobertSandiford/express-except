# express-except

Simple express middleware for responding on any route EXCEPT the specified route.

Can be combined with a route specifier to match any route within the first route EXCEPT the except route.

### Examples

Exclude /  from this route:

```
app.use( express.static('assets') )

```

Like this:

```
const except = require('express-except') // or import except from 'express-except'
app.use( except('/', express.static('assets')) )
```

----


Exclude / and /index.html from this route:

```
app.use( 'assets', express.static('assets') )
```

Like this:

```
const except = require('express-except') // or import except from 'express-except'
app.use( 'assets', except(['/', '/index.html'], express.static('assets')) )
```

### Copy Pasta (no updates included)

```
const pathToRegexp = require('path-to-regexp')

function except(path, middleware) {
    return (req, res, next) => {
        const regex = pathToRegexp(path)
        if ( regex.exec(req.originalUrl) ) {
            return next(req, res, next)
        } else {
            return middleware(req, res, next)
        }
    }
}
```
