import { createFilter } from '@rollup/pluginutils';

/** @type {(options?: unknown) => import('rollup').Plugin} */
export function starterPlugin(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'starter-plugin',
    options() {},
    buildStart() {},
    resolveId() {},
    resolveDynamicImport() {},
    load(id) {
      if (!filter(id)) return null;
    },
    transform() {
      if (!filter(id)) return null;
    },
    buildEnd() {},
    watchChange() {},
    outputOptions() {},
    renderStart() {},
    resolveImportMeta() {},
    resolveFileUrl() {},
    renderChunk() {},
    writeBundle() {},
    renderError() {},
    banner: '',
    footer: '',
    intro: '',
    outro: '',
  };
}
