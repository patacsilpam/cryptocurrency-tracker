import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/landing/Home";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
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
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];
export const router = createBrowserRouter(routes);
