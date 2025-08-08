import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
  it('renders main headings', () => {
    render(<Hero />);
    expect(screen.getByText(/BOWL YOUR/i)).toBeInTheDocument();
    expect(screen.getByText(/WAY TO FUN/i)).toBeInTheDocument();
  });

  it('renders the location address', () => {
    render(<Hero />);
    expect(
      screen.getByText(/12 Beech St, Brampton, ON L6V 1V1, Canada/i)
    ).toBeInTheDocument();
  });

  it('renders the Contact Us button with correct link', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /Contact Us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#footer');
  });
});
