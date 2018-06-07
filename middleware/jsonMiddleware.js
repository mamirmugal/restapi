
// Checking header and only passing json header
module.exports = function (req, res, next) {
    var requestType = req.get('Content-Type');

    // only allowing json to pass
    if (requestType == 'application/json' || req.accepts('html')) {
        next();
    } else {
        res.status(400).send({
            error: "Could not decode request: JSON parsing failed!"
        });
    }
};