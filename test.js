"use strict";

let fs = require("fs");
let parseString = require("xml2js").parseString;

let path = "./books.xml";

function book(file, callback) {
    fs.readFile(file, function(err, data) {
        if (err) {
            return callback(err);
        }

        return callback(null, data);

    });
}



book(path, function(error, data) {
    if(error) {
        return console.log("error: ", error.message);
    }

    parseString(data, function (err, result) {
        if(err) {
            return(err);
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
        console.log(JSON.stringify(arr));
    });
});

