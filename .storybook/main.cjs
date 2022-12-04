// .storybook/main.js

module.exports = {
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  stories: ["../src/*/.stories.@(tsx|mdx)"],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    // Return the altered config
    return config;
  },
};