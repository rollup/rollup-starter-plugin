const assert = require('assert');
const rollupStarterPlugin = require('..');

assert.strictEqual(rollupStarterPlugin().name, 'starter-plugin');
