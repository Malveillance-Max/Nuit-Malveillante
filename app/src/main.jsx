import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Home</h1>
    },
    {
      path: '*',
      element: <Navigate to="/" />
    }

  ], {
    future: {
      v7_normalizeFormMethod: true,
    },
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
