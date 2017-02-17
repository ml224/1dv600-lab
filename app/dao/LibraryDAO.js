(function () {
    "use strict";

    let fs = require("fs");


    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    let xml2js = require("xml2js");


    // Use this file to write and read the xml file.
    let LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(path, callback) {
            fs.readFile(path, function(err, data) {
                if (err) {
                    return callback(err);
                }


                xml2js.parseString(data, function (err, result) {
                    if(err) {
                        return callback(err);
                    }

                    let arr = [];
                    let books = result.catalog.book;

                    books.forEach(function(object) {
                        let obj = {};
                        obj.id = object.$.id;
                        obj.title = object.title.toString();
                        obj.author = object.author.toString();
                        obj.genre = object.genre.toString();
                        obj.publishDate = object.publish_date.toString();
                        obj.description = object.description.toString();

                        arr.push(obj);
                    });

                    return callback(null, JSON.stringify(arr));
                });
            });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
