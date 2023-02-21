const {composePlugins, withNx} = require('@nrwl/webpack');
const {withReact} = require('@nrwl/react');

const reactOptions = process.env.NODE_ENV === 'production' ? {
  extractCss: false,
  generateIndexHtml: false,
} : undefined

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(reactOptions), (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.output.filename = '[name].js';
    config.entry = 'apps/storefront/src/main.tsx';
    // config.mode = 'production';
    config.output.clean = true;
    config.optimization.runtimeChunk = false;
  }
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
