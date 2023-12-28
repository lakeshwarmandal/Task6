import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home";
import Contacts from "./components/contacts";
import ProjectsDetails from "./components/projectsDetails";
import ProjectsShowcase from "./components/projectsShowcase";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/projectsShowcase",
    element: <ProjectsShowcase />,
  },
  {
    path: "/projectsDetails",
    element: <ProjectsDetails />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
