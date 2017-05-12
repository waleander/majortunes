
var request = require("supertest");

describe('GET /', function(){
  it('expects HTTP response code 200', function(done){
    request(sails.hooks.http.app)
    .get('/')
    .expect(200, done);
  });
});
