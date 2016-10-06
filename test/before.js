"use strict";

import mocha from 'mocha';
import coMocha from 'co-mocha'; 
import chai from 'chai';
import sinon from 'sinon';
import 'sinon-as-promised';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import lolex from 'lolex';

coMocha(mocha);

chai.should();
chai.use(sinonChai);
chai.use(chaiAsPromised);
 
global.sinon = sinon;
 
setTimeout(() => {
    beforeEach(function() {
        global.clock = lolex.install();
    });
 
    afterEach(function() {
        global.clock.uninstall();
    });
});

