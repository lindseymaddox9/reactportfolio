import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Home from './components/home';
import Contact from './components/contact';
import Resume from './components/resume';
import Portfolio from './components/portfolio';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
   
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
