import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAppContext } from '../Appcontext';
import { vi } from 'vitest';

vi.mock('../Appcontext', () => ({
  useAppContext: vi.fn(),
}));

describe('Navbar', () => {
  const mockUseAppContext = useAppContext;

  beforeEach(() => {
    mockUseAppContext.mockReturnValue({
      logout: vi.fn(),
      nam: 'John Doe',
      pic: '',
      id: '123',
    });
  });

  test('renders Navbar component', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check for logo
    expect(screen.getByAltText('logo')).toBeInTheDocument();

    // Check for links
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByAltText('user')).toBeInTheDocument();
  });

  test('renders default user photo if pic is not provided', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const userPhoto = screen.getByAltText('user');
    expect(userPhoto.src).toContain('user.png');
  });

  test('renders provided user photo if pic is provided', () => {
    mockUseAppContext.mockReturnValueOnce({
      logout: vi.fn(),
      nam: 'John Doe',
      pic: 'http://example.com/user.jpg',
      id: '123',
    });

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const userPhoto = screen.getByAltText('user');
    expect(userPhoto.src).toBe('http://example.com/user.jpg');
  });

  test('renders Login link if id is not provided', () => {
    mockUseAppContext.mockReturnValueOnce({
      logout: vi.fn(),
      nam: 'Guest',
      pic: '',
      id: null,
    });

    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('Guest')).toBeInTheDocument();
  });

  test('renders Logout link if id is provided', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
