
// This middleware will handle the errors
module.exports = function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).send({
            error: "Could not decode request: JSON parsing failed"
        });
    }
};