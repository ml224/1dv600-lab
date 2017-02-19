(function () {
    "use strict";

    let LibraryDAO = require("../dao/LibraryDAO");


    module.exports = function (id, callback) {
        LibraryDAO.writeXMLFile(id, function(err, res) {
           if(err) {
               return callback(err);
           }
           return callback(null, res);

        });
    };
}());
