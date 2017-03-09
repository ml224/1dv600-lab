/*var expect    = require("chai").expect;
var funcs = require("../app/dao/LibraryDAO");

describe("add book", function () {

    describe("adds object array", function () {

        it("adds obj to array", function () {
            var obj = {
                id: "test",
                title: "test",
                author: "test",
                genre: "test",
                publish_date: "test",
                description: "test"
            };

            //check out plug-in http://chaijs.com/plugins/chai-as-promised/
            funcs.writeXMLFile("../books.xml", undefined, obj)
                .then(function() {
                funcs.readXMLFile("../books.xml");

            })
                .then(function(result) {
                    expect(result).to.be.an("array");
                });

        });
    });
});
 */