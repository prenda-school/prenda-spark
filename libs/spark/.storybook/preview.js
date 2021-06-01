import React from 'react';
import { addDecorator } from '@storybook/react';
import { SparkThemeProvider } from '../src/theme/Provider';

addDecorator((Story) => (
  <SparkThemeProvider>
    <Story />
  </SparkThemeProvider>
));

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};