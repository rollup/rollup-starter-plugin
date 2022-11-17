import assert from 'node:assert';
import { starterPlugin } from 'rollup-starter-plugin';

assert.strictEqual(starterPlugin().name, 'starter-plugin');
