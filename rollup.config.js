import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

const moduleName = pkg.name.replace(/-/g, '_');

const plugins = [
  eslint({}),
  typescript({
    rollupCommonJSResolveHack: true,
    clean: true
  }),
  commonjs()
];

export default {
  input: `src/index.ts`,
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
      name: moduleName,
      sourcemap: true,
      globals: {}
    },
    {
      file: 'build/index.es.js',
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins
};
