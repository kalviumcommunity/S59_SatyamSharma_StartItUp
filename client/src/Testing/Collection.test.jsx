// src/Testing/Collection.test.jsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Collection from '../components/Collection';

describe('Collection Component', () => {
  test('renders GO BACK button', () => {
    render(
      <MemoryRouter>
        <Collection />
      </MemoryRouter>
    );
    const goBackButton = screen.getByText(/go back/i);
    expect(goBackButton).toBeInTheDocument();
  });

  test('renders Connected Accounts heading', () => {
    render(
      <MemoryRouter>
        <Collection />
      </MemoryRouter>
    );
    const heading = screen.getByText(/connected accounts/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders Up-Vote and Remove buttons', () => {
    render(
      <MemoryRouter>
        <Collection />
      </MemoryRouter>
    );

    // Log the rendered HTML to inspect it
    screen.debug();

    const upVoteButtons = screen.getAllByText(/up-vote/i);
    const removeButtons = screen.getAllByText(/remove/i);

    // Ensure there is at least one Up-Vote button and one Remove button
    expect(upVoteButtons.length).toBeGreaterThan(0);
    expect(removeButtons.length).toBeGreaterThan(0);

    // Optional: Ensure that all buttons are in the document
    upVoteButtons.forEach(button => expect(button).toBeInTheDocument());
    removeButtons.forEach(button => expect(button).toBeInTheDocument());
  });
});
