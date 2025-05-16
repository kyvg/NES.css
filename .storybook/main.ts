import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: ["../src/**/*.doc.mdx", '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
