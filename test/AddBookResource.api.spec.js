
// API documentation - https://github.com/visionmedia/supertest
var request = require("supertest");
var readFile = require("../app/dao/LibraryDAO");

var app = require("../app");


describe("Add Book Resource", function () {

    describe("GET and PUT /api/add", function () {

        it("respond with array", function (done) {

            request(app)
                .get("/api/books")
                .set("Accept", "application/json")
                .expect(200, done);

        });
    });
});