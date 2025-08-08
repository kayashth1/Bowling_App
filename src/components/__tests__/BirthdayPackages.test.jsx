import { render, screen, fireEvent } from '@testing-library/react';
import BirthdayPackages from '../BirthdayPackages';
import { describe, it, expect } from 'vitest';

describe('BirthdayPackages Component', () => {
  it('renders both package titles initially', () => {
    render(<BirthdayPackages />);
    expect(screen.getByText(/10 Pin Birthday Package/i)).toBeInTheDocument();
    expect(screen.getByText(/5 Pin Birthday Package/i)).toBeInTheDocument();
  });

  it('expands package on Learn More click and shows details', () => {
    render(<BirthdayPackages />);
    const learnMoreButtons = screen.getAllByRole('button', { name: /learn more/i });

    // Click the first Learn More
    fireEvent.click(learnMoreButtons[0]);

    // Check expanded content
    expect(screen.getByText(/Strike Up the Fun/i)).toBeInTheDocument();
    expect(screen.getByText(/Minimum 10 participents required/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Slices of Pizza per participant/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument();
  });

  it('collapses package details on Back click', () => {
    render(<BirthdayPackages />);
    const learnMoreButtons = screen.getAllByRole('button', { name: /learn more/i });

    // Open and then close
    fireEvent.click(learnMoreButtons[0]);
    const backButton = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backButton);

    // Back to initial view
    expect(screen.getByText(/10 Pin Birthday Package/i)).toBeInTheDocument();
    expect(screen.getByText(/5 Pin Birthday Package/i)).toBeInTheDocument();
  });
});
