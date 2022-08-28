const { version, name, description } = require("./package.json");
module.exports = {
    notFound : (req, res, next) => {
        if(req.originalUrl === '/') {
            return res.status(200).send({
                name: name,
                version: version,
                description: description
            })
        }
        res.status(404)
        next(new Error(`404 Not Found`))
    },
    /* eslint-disable no-unused-vars */
    error : (err, req, res, next) => {
    /* eslint-enable no-unused-vars */
        const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
        res.status(statusCode)
        res.json({
          message: err.message
        });
    }
}