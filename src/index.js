import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteLayout from "./pages/RouteLayout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Details from "./pages/Details";
import Index from "./pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "add",
        element: <Add />,
      },

      {
        path: ":id/edit",
        element: <Edit />,
      },
      {
        path: ":id",
        element: <Details />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
