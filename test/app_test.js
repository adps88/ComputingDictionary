let request = require('supertest');
let chai = require('chai');
let expect = chai.expect;

describe('app test', function () {

    let server;

    beforeEach(() => server = require('../server/app')());
    afterEach(() => server.close());

    it('responds to /hello', function testSlash(done) {
        request(server).get('/hello').expect(200).end((err, res) => {
            expect(res.body.message).to.equal("Hello World!");
            done();
        });
    });

    it('responds to /goodbye', function testSlash(done) {
        request(server).get('/goodbye').expect(200).end((err, res) => {
            expect(res.body.message).to.equal("Cya!");
            done();
        });
    });

    it('404 everything else', function testPath(done) {
        request(server).get('/foo/bar').expect(404, done);
    });

});