"use strict";

const users = require('../src/users.js');

describe('users', () => {

    describe('.getUser(id)', () => {

        it('should return the correct user', function* () {
            const result = yield users.getUser(1);
            result.should.deep.equal({id: 1});
        });

    });

    describe('.getUsers(...ids)', () => {

        beforeEach(() => {
            sinon.stub(users, 'getUser');
            users.getUser.withArgs(1).resolves({id: 1});
            users.getUser.withArgs(2).resolves({id: 42});
        });

        afterEach(() => {
            users.getUser.restore();
        });

        it('should return the correct users', function* () {
            const results = yield users.getUsers(1, 2, 3);
            results.should.deep.equal([{id: 1}, {id: 42}, undefined]);
        });

    });

});
