import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/JobDetails/JobDetails.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Statistics />
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/Job/:id',
        element: <JobDetails />,
        loader: () => axios.get('/jobs.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
