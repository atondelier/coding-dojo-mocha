"use strict";

exports.getUser = (id) => ({id});
exports.getUsers = (...ids) => ids.map(exports.getUser)

