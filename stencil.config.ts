import { Config } from '@stencil/core';
// import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
  namespace: 'mycomponent',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
