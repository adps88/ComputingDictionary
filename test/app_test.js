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

    it('responds to /definitions', function testSlash(done) {
        request(server).get('/definitions').expect(200).end((err, res) => {
            expect(res.body).to.deep.equal({
                "Binary": "1's and 0's representing all data within a computer system.",
                "ASCII": "The coding system a computer uses to represent characters.",
                "Computing": "The subject about computers and computery stuff."
            });
            done();
        });
    });

    it('404 everything else', function testPath(done) {
        request(server).get('/foo/bar').expect(404, done);
    });

});