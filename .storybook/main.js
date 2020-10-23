module.exports = {
  stories: ['../src/**/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
  ],
};
