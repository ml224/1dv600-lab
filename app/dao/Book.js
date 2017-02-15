"use strict";

let fs = require("fs");
let parseString = require("xml2js").parseString;

function bookList(path) {

        fs.readFile(path, function(err, data) {
            if (err) {
                return(err);
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

            return JSON.stringify(arr);
        });
    });
}

module.exports.createList = bookList;

