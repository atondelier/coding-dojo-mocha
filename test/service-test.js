"use strict";

const service = require('../src/service.js');

describe('service', () => {

    describe('.add(a, b)', () => {

        it('should compute the sum of the two numbers provided', () => {
            service.add(1, 2).should.equal(3); 
        });

    });

});

