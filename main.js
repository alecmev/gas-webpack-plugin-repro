const seedrandom = require("seedrandom");

module.exports = { foo: () => seedrandom("bar")() };
