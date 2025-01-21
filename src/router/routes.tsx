import { createBrowserRouter, Navigate } from "react-router-dom";
import { LandingLayout } from "../components/layout/landing/LandingLayout";
//Landing Pages
import { Home } from "../pages/landing/Home";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { NotFound } from "../pages/dashboard/NotFound";
import { Features } from "../pages/landing/Features";
export const routes = [
  {
    //public routes with landing page layout
    path: "/",
    element: <Home />,
  },
];
export const router = createBrowserRouter(routes);
