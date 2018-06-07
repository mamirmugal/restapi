
// Router object
module.exports = function (app) {

    let MainController = require('../controllers/MainController');

    // Showing default index page
    app.get("/", MainController.index);


    // Post method for default index page
    app.post("/", MainController.post)
};
