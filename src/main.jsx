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
import Review from './components/Review';
import FaqAboutBook from './components/FaqAboutBook';
import ReadBooks from './components/ReadBooks';
import WishlistBooks from './components/WishlistBooks';


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
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("fakeData.json"),
        children:[
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlistbook",
            element: <WishlistBooks></WishlistBooks>,
          }
        ]
      },
      {
        path: "/pageread",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/faq",
        element: <FaqAboutBook></FaqAboutBook>
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
