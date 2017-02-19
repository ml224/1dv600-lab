(function () {
    "use strict";

    let LibraryDAO = require("../dao/LibraryDAO");


    module.exports = function (id, callback) {
        LibraryDAO.writeXMLFile(id, function(error, response) {
            if(error) {
                return callback(error);
            }

            return callback(null, response);
        });
    };
}());
