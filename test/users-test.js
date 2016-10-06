"use strict";

const users = require('../src/users.js');

describe('users', () => {

    describe('.getUser(id)', () => {

        it('should return the correct user', () => {
            users.getUser(1).should.deep.equal({id: 1});
        });

    });

    describe('.getUsers(...ids)', () => {

        

    });

});
