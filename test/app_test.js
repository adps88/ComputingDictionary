let request = require('supertest');
let chai = require('chai');
let expect = chai.expect;

describe('app test', function () {

    let server;

    beforeEach(function () {
        server = require('../server/app');
    });

    afterEach(function () {
        server.close();
    });

    it('responds to /hello', function testSlash(done) {
        request(server)
            .get('/hello')
            .expect(200)
            .end((err, res) => {
                expect(res.body.message).to.equal("Hello World!");
                done();
            });
    });

    it('404 everything else', function testPath(done) {
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });

});