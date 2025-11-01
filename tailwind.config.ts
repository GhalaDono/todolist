import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my-custom-theme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@skeletonlabs/skeleton/**/*.svelte'
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#38614a',
      },
    },
  },
  plugins: [
    forms,
    skeleton({
      themes: {
        custom: [myCustomTheme],
      },
    }),
  ],
};

export default config;
