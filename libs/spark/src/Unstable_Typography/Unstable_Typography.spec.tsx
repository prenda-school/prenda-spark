import { render } from '@testing-library/react';
import Unstable_Typography from './Unstable_Typography';

describe('Unstable_Typography', () => {
  it('Can render without ThemeProvider', () => {
    const { baseElement } = render(<Unstable_Typography />);

    expect(baseElement).toBeTruthy();
  });
});