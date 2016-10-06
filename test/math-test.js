"use strict";

const math = require('../src/math.js');

describe('math', () => {

    describe('.sum(...)', () => {

        it('should compute the sum of the provided numbers', () => {
            math.sum(1, 2, 3, 4, 5).should.equal(15);
        });

    });

    describe('.average(...)', () => {

        it('should compute the average of the provided numbers', () => {
            math.average(1, 2, 3, 4, 5).should.equal(3);
        });

    });

});
