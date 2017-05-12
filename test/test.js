'use strict';

var sails = require('sails');
var request = require("supertest");

describe('GET /', function(){
  it('expects HTTP response code 200', function(done){
    request(sails.hooks.http.index)
    .get('/')
    .expect(200, done);
  });
});
