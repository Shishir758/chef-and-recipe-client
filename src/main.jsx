import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'

import ViewRecipes from './components/ViewRecipes'
import './index.css'
import Login from './components/Login'
import Register from './components/Register'
import AuthProviders from './components/provider/AuthProviders'
import PrivateRoute from './components/routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />
  },

  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'viewRecipes/:id',
    element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>

);
