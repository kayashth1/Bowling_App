import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { describe, it, expect } from 'vitest';

describe('Footer Component', () => {
  it('renders logo image', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/Brampton Bowling Centre Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /google/i })).toBeInTheDocument();
  });

  it('renders navigation sections', () => {
    render(<Footer />);
expect(
  screen.getByRole('heading', { name: /News/i, level: 3 })
).toBeInTheDocument();  
expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Packages/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText(/\+1 905-459-2711/i)).toBeInTheDocument();
    expect(screen.getByText(/bramptonbowl@yahoo.ca/i)).toBeInTheDocument();
    expect(screen.getByText(/12 Beech St, Brampton/i)).toBeInTheDocument();
  });

  it('renders copyright', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2023 Brampton Bowling Centre/i)
    ).toBeInTheDocument();
  });
});
