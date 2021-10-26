import { render } from '@testing-library/react';
import { GearFilled } from '@prenda/spark-icons';
import StepIcon from './StepIcon';

describe('StepIcon', () => {
  it('renders number icon', () => {
    const { getByText } = render(<StepIcon icon={3} />);
    expect(getByText('3')).not.toBe(null);
  });

  it('renders string icon', () => {
    const { getByText } = render(<StepIcon icon={'A'} />);
    expect(getByText('A')).not.toBe(null);
  });

  it('renders <CheckThick> when completed', () => {
    const { getByTestId } = render(<StepIcon icon={1} completed />);
    expect(getByTestId('CheckThickIcon')).not.toBe(null);
  });

  it('renders <AlertThick> on error', () => {
    const { getByTestId } = render(<StepIcon icon={1} error />);
    expect(getByTestId('AlertThickIcon')).not.toBe(null);
  });

  it('can render icons with accessible titles', () => {
    const { getByTitle } = render(
      <div>
        <StepIcon icon={1} titleAccess="Step one" />
        <StepIcon icon={'A'} titleAccess="Step A" />
        <StepIcon icon={2} completed titleAccess="Step two, completed" />
        <StepIcon icon={3} error titleAccess="Step three, error" />
      </div>
    );
    expect(getByTitle('Step one')).not.toBe(null);
    expect(getByTitle('Step A')).not.toBe(null);
    expect(getByTitle('Step two, completed')).not.toBe(null);
    expect(getByTitle('Step three, error')).not.toBe(null);
  });

  it('renders custom icon', () => {
    const { getByTestId } = render(<StepIcon icon={<GearFilled />} />);
    expect(getByTestId('GearFilledIcon')).not.toBe(null);
  });
});