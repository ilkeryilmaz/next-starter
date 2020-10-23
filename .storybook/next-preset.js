const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;

    const config = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };

    // TypeScript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: APP_DIR,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel', require.resolve('babel-preset-react-app')],
            plugins: ['react-docgen'],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
