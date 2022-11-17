import { readFileSync } from 'node:fs';

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)),
);

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [],
  external: Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies }),
};
