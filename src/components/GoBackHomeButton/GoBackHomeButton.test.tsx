import { render, screen } from '@testing-library/react';
import { GoBackHomeButton } from './GoBackHomeButton';

const setUp = () => render(<GoBackHomeButton/>);

describe('GoBackHomeButton', () => {
  it('should render text', () => {
    setUp();
    expect(screen.getByText(/Go back to Home/i)).toBeInTheDocument();
  })
  it('should has a route to home page', () => {
    setUp();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  })
})