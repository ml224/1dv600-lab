(function () {
    "use strict";

    let LibraryDAO = require('../dao/LibraryDAO');
    let Book = require("../dao/Book");
    let request = require("request");

    function listBooks(array) {
        let book1 = new Book("id", "title1", "author1", "genre1", "date1", "the first book in the list");
        let book2 = new Book("id2", "title2", "author2", "genre2", "date2", "the second book in the list");
        let book3 = new Book("id3", "title3", "author3", "genre3", "date3", "the third book in the list");

        //adding book-objects to array
        array.push(book1, book2, book3);
    }


    module.exports = function(callback){
        // The title is optional and is only present when searching. (You need yo modify the books.js file first)
        request(function(error, response) {
            //adding objects to array
            let list = [];
            listBooks(list);
            let obj = {answer: list};

           if(error) {
               return callback(error);
           }
           if(response.statusCode !== 200) {
               return callback(new Error("Error code, response not 200"));
           }

           return callback(null, console.log(JSON.stringify(obj)));
        });

    };

}());






/*

 /*request(function(error, response, list) {
 if(error) {
 return callback(error);
 }

 if(response.statusCode !== 200) {
 return callback(new Error("bad status code!"));
 }

 return callback(null, list);
 });*/