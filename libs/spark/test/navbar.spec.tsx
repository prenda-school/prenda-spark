import { render } from '@testing-library/react';
import 'jest-styled-components';
import { SparkThemeProvider, NavBar, NavBarItem } from '../src';
import { QuestionIconDuotone } from '../src/icons';

describe('Button', () => {
  it('is truthy', () => {
    const { baseElement } = render(
      <SparkThemeProvider>
        <NavBar>
          <NavBarItem href="/" startIcon={<QuestionIconDuotone />}>
            Dashboard
          </NavBarItem>
        </NavBar>
      </SparkThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
