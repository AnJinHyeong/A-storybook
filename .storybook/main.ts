import path from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: [
    path.resolve(__dirname, '../public')
  ],
  webpackFinal: async (config) => {
    if (config.output) {
      config.output.publicPath = '/storybook/';
    }
    return config;
  }
};

export default config;
