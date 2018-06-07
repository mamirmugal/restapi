// Welcome Main page
module.exports = {

    // show main page
    index: function (req, res) {
        res.status(200).send("Small REST Api");
    },

    post: function (req, res) {

        let response = {};

        // if payload exists
        if (typeof req.body.payload != 'undefined') {
            let bodyJson = req.body.payload;

            response.response = [];
            bodyJson.forEach(function (singleObject) {
                if (singleObject.type == 'htv' && singleObject.workflow == 'completed') {

                    let address = singleObject.address.buildingNumber + " " +
                        singleObject.address.street + " " +
                        singleObject.address.suburb + " " +
                        singleObject.address.state + " " +
                        singleObject.address.postcode

                    let obj = {
                        concataddress: address,
                        type: singleObject.type,
                        workflow: singleObject.workflow
                    };

                    response.response.push(obj)
                }
            });

            res.status(200).send(response);
        }
    }
};