import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import ListedBooks from './components/ListedBooks';
import PagesToRead from './components/PagesToRead';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listbook",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/pageread",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
