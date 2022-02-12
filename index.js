
const pathToRegexp = require('path-to-regexp')

export default function except(path, middleware) {
    return (req, res, next) => {
        const regex = pathToRegexp(path)
        if ( regex.exec(req.originalUrl) ) {
            return next(req, res, next)
        } else {
            return middleware(req, res, next)
        }
    }
}
