(function () {
    "use strict";

    let LibraryDAO = require("../dao/LibraryDAO");
    let path = "./books.xml";


    module.exports = function (id, callback) {
        LibraryDAO.writeXMLFile(path, id, undefined, function(err, res) {
           if(err) {
               return callback(err);
           }
           return callback(null, res);

        });
    };
}());
