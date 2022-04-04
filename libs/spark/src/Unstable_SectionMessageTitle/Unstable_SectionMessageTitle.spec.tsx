import { render } from '@testing-library/react';
import Unstable_SectionMessageTitle from './Unstable_SectionMessageTitle';

describe('Unstable_SectionMessageTitle', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(
      <Unstable_SectionMessageTitle title="Test">
        Testy Test
      </Unstable_SectionMessageTitle>
    );

    expect(baseElement).toBeTruthy();
  });
});