import React from 'react';
import { ThemeProvider, extendTheme } from '~/theme';
import { theme } from '~/theme';

// extend default Chakra theme
const fullTheme = extendTheme(theme);

export const themeDecorator = (Story) => (
  <ThemeProvider theme={fullTheme}>
    <Story />
  </ThemeProvider>
);

export const decorators = [themeDecorator];

export const parameters = {
  layout: 'centered',
};
