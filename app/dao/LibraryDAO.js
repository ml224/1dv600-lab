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
        writeXMLFile: function(id) {
            fs.readFile("./books.xml", function (err, data) {
                if (err) {
                    return (err);
                }


                xml2js.parseString(data, function (err, res) {
                    if (err) {
                        console.log(err);
                    }

                    let arr = [];

                    res.catalog.book.forEach(function(object) {
                     if(object.$.id !== id) {
                     arr.push(object);
                     }
                     });


                    //build new document with excluded book to replace old one
                    let builder = new xml2js.Builder();
                    let newXML = builder.buildObject(arr);


                    fs.writeFile("./books.xml", newXML, "utf8", function(err, res) {
                        if(err) {
                            return err;
                        }
                    });
                });
            });
        }
    };

    module.exports = LibraryDAO;
}());
