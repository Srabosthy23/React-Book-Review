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
import BookDetails from './components/BookDetails';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './components/ErrorPage';
import Library from './components/Library';
import ReadingChallenge from './components/ReadingChallenge';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/library",
        element: <Library></Library>,
      },
      {
        path: "/readingchallenge",
        element: <ReadingChallenge></ReadingChallenge>
      },
      {
        path: "/bookcard/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("fakeData.json")
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
