import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/landing/Home";
import path from "path";
import { Dashboard } from "../pages/dashboard/Dashboard";
export const routes = [
  {
    //public routes with landing page layout
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
export const router = createBrowserRouter(routes);
