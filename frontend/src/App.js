import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/login" />, // Default route: redirect from "/" to "/login"
  },
  {
    path: '/login',
    element: <LoginPage />, // Route for the login page
  },
  {
    path: '/signup',
    element: <SignupPage />, // Route for the signup page
  },
  {
    path: '*',
    element: <Navigate replace to="/login" />, // Fallback route for unmatched paths
  },
]);

function App() {
  return <RouterProvider router={router} />; // Use RouterProvider to render the router
}

export default App;