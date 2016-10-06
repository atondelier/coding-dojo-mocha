"use strict";

const sum = (...args) => args.reduce((a, b) => a + b);

const average = (...args) => sum(...args) / args.length;

module.exports = {sum, average};
