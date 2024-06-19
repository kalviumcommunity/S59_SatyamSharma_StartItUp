// src/Testing/Footer.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders Made By text', () => {
    render(<Footer />);
    const madeByText = screen.getByText(/made by/i);
    expect(madeByText).toBeInTheDocument();
  });

  test('renders GitHub and LinkedIn links', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });

    expect(githubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();

    expect(githubLink).toHaveAttribute('href', 'https://github.com/Satyamsharmahp36');
    expect(githubLink).toHaveAttribute('target', '_blank');

    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/satyam-sharma-a21041289/');
    expect(linkedInLink).toHaveAttribute('target', '_blank');
  });

  test('GitHub and LinkedIn images have correct alt text', () => {
    render(<Footer />);
    const githubImage = screen.getByAltText('GitHub');
    const linkedInImage = screen.getByAltText('LinkedIn');

    expect(githubImage).toBeInTheDocument();
    expect(linkedInImage).toBeInTheDocument();
  });

  test('GitHub and LinkedIn images have correct classes for styling', () => {
    render(<Footer />);
    const githubImage = screen.getByAltText('GitHub');
    const linkedInImage = screen.getByAltText('LinkedIn');

    expect(githubImage).toHaveClass('w-10 sm:w-10 hover:scale-110 transform transition');
    expect(linkedInImage).toHaveClass('w-10 sm:w-10 hover:scale-110 transform transition');
  });
});
