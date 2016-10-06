"use strict";

exports.getUser = (id) => Promise.resolve({id});
exports.getUsers = (...ids) => Promise.all(ids.map(exports.getUser));

