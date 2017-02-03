(function () {
    "use strict";

    let LibraryDAO = require('../dao/LibraryDAO');
    let Book = require("../dao/Book");
    //let request = require("request");



    function addBooks(array) {

        let book1 = new Book("id", "title1", "author1", "genre1", "date1", "the first book in the list");
        let book2 = new Book("id2", "title2", "author2", "genre2", "date2", "the second book in the list");
        let book3 = new Book("id3", "title3", "author3", "genre3", "date3", "the third book in the list");

        array.push(book1, book2, book3);

        return array;

    }

    module.exports = function (callback){
        let list = [];
        addBooks(list);

        return callback(null, JSON.stringify({answer: list}));
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