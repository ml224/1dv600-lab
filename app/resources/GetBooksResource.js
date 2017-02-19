(function () {
    "use strict";

    let LibraryDAO = require("../dao/LibraryDAO");

    let path = "./books.xml";




    module.exports = function (callback) {
        LibraryDAO.readXMLFile(path, function(err, res) {
            if(err) {
                return callback(err);
            }

            return callback(res);
        });
    };
}());