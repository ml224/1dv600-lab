(function () {
    "use strict";

    let express = require("express");
    let router = express.Router();


    let PingResource = require('../../resources/PingResource');

    router.get("/", function (req, res) {
        res.type("json");

        PingResource(function (data) {
            res.send(data);
        });
    });


    module.exports = router;
}());
