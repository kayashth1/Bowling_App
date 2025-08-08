// src/Pages/__tests__/Homepage.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Homepage from '../Homepage';

// Mock subcomponents so we don't depend on their internal rendering
vi.mock('../../components/Navbar', () => ({
  default: () => <div data-testid="navbar">Navbar</div>,
}));
vi.mock('../../components/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

// Mock the video asset so Vitest doesn't try to load it
vi.mock('../../../assets/hero.mp4', () => ({
  default: 'video-mock.mp4',
}));

describe('Homepage', () => {
  it('renders without crashing', () => {
    render(<Homepage />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('renders the background video with correct attributes', () => {
    render(<Homepage />);
    const videoEl = document.querySelector('video');
    expect(videoEl).toBeInTheDocument();
    expect(videoEl).toHaveAttribute('src', 'video-mock.mp4');
    expect(videoEl).toHaveAttribute('autoPlay');
    expect(videoEl).toHaveAttribute('loop');
    expect(videoEl).toHaveAttribute('playsInline');
  });

});
