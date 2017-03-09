(function () {
    "use strict";

    let LibraryDAO = require("../dao/LibraryDAO");

    let path = "./books.xml";

    module.exports = function (data, callback) {
        LibraryDAO.writeXMLFile(path, undefined, data, function(err, res) {
            if(err){
                console.log(err);
            }
            return callback(null, res);
            /*LibraryDAO.readXMLFile(path, function(err, res) {

            });*/
        });
    };

}());
