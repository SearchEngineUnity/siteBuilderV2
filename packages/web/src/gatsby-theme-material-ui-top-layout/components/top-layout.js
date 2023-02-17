import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { deepmerge } from '@mui/utils';
import { useCustomTheme } from '../useCustomTheme';

import createStore from '../../state/createStore';

export default function TopLayout({ children, theme }) {
  const store = createStore();

  const customTheme = useCustomTheme();

  const mergedTheme = deepmerge(theme, customTheme);

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={mergedTheme}>{children}</ThemeTopLayout>
    </Provider>
  );
}
