import { render, screen } from '@testing-library/react';
import { Contacts } from './Contacts';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

const setUp = () => render(<Contacts/>);

describe('Contacts', () => {
  it('renders the contact information', () => {
    setUp();
    expect(screen.getByText(/telegram/i)).toBeInTheDocument();
    expect(screen.getByText(/gmail/i)).toBeInTheDocument();
    expect(screen.getByText(/wechat/i)).toBeInTheDocument();
  });
});
