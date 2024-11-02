import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Blog from "./components/Blog/Blog.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Statistics />,
         },
         {
            path: "/blog",
            element: <Blog />,
         },
         {
            path: "/applied-jobs",
            element: <AppliedJobs />,
         },
         {
            path: "/Job/:id",
            element: <JobDetails />,
            loader: () => axios.get("/jobs.json"),
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
   </StrictMode>
);
