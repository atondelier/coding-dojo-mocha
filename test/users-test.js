"use strict";

const users = require('../src/users.js');

describe('users', () => {

    describe('.getUser(id)', () => {

        it('should return the correct user', () => {
            users.getUser(1).should.deep.equal({id: 1});
        });

    });

    describe('.getUsers(...ids)', () => {

        beforeEach(() => {
            sinon.stub(users, 'getUser');
            users.getUser.withArgs(1).returns({id: 1});
            users.getUser.withArgs(2).returns({id: 42});
        });

        afterEach(() => {
            users.getUser.restore();
        });

        it('should return the correct users', () => {
            users.getUsers(1, 2, 3).should.deep.equal([{id: 1}, {id: 42}, undefined]);
        });

    });

});
