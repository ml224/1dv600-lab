(function () {
    "use strict";

    let LibraryDAO = require('../dao/LibraryDAO');
    let list = require("../dao/Book");



    let file = "./books.xml";




    module.exports = function (callback) {
        let array = list.createList(file);
        return callback(array);
    };
}());