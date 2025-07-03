import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { User } from '../../';

describe('Header component', () => {
  test('shows Sign in button when no user', () => {
    render(<Header user={null} onSignIn={() => {}} onSignOut={() => {}} />);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });

  test('shows Sign out button when user present', () => {
    const user: User = { uid: '1', username: 'tester' };
    render(<Header user={user} onSignIn={() => {}} onSignOut={() => {}} />);
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });
});
