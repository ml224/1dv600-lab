var expect    = require("chai").expect;
var LibraryDAO = require("../app/dao/LibraryDAO");
var examplePath = "../test-books.xml";

describe("add book", function () {

    describe("adds object to xml-content", function () {

        it("does not return a value", function () {
            var xml = examplePath;
            var obj = {
                id: "55",
                title: "test",
                author: "test",
                genre: "test",
                publish_date: "test",
                description: "test"
            };

            /*let result = new Promise(LibraryDAO.writeXMLFile(xml, undefined, obj), function(res, rej) {
                res("step 1");
                })
                .then(function() {
                    "use strict";
                    fs.readFile(xml, function (err, data) {
                        let books = data.getElementsByTagName("book");
                })
            result();*/


            var result = LibraryDAO.writeXMLFile(xml, undefined, obj);
            expect(result).to.be.an("undefined");
        });
    });
});
