"use strict";

const sum = (...args) => args.reduce((a, b) => a + b, 0);

const average = (...args) => sum(...args) / args.length;

module.exports = {sum, average};

