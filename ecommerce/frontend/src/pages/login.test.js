// login.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store'; // Install redux-mock-store for mocking Redux store
import Login from './Login';

const mockStore = configureStore([]);

describe('Login component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: null,
        isSuccess: false,
      },
    });
  });

test('renders login form', () => {
    const { getByText: screenGetByText, getByPlaceholderText: screenGetByPlaceholderText } = render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>
        </Provider>
    );

    expect(screenGetByText('LOGIN')).toBeInTheDocument();
    expect(screenGetByPlaceholderText('email')).toBeInTheDocument();
    expect(screenGetByPlaceholderText('password')).toBeInTheDocument();
    expect(screenGetByText('Forgot Password?')).toBeInTheDocument();
    expect(screenGetByText('LOGIN')).toBeInTheDocument();
    expect(screenGetByText('SIGNUP')).toBeInTheDocument();
});

  test('submits login form with valid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    // Fill in email and password fields
    const screenGetByPlaceholderText = screen.getByPlaceholderText;
    const screenGetByText = screen.getByText;

    fireEvent.change(screenGetByPlaceholderText('email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screenGetByPlaceholderText('password'), { target: { value: 'password' } });

    // Click login button
    fireEvent.click(screenGetByText('LOGIN'));

    // Wait for the dispatch action to be called
    await waitFor(() => expect(store.getActions()).toHaveLength(1));

    // Assert that the dispatch action was called with the correct payload
    expect(store.getActions()[0]).toEqual({ type: 'user/loginUser', payload: { email: 'test@example.com', password: 'password' } });
  });

  // Add more test cases for handling invalid credentials, etc.
});
