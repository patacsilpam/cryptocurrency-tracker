import { createBrowserRouter, Navigate } from "react-router-dom";
import { LandingLayout } from "../components/layout/landing/LandingLayout";
//Landing Pages
import { Landing } from "../pages/landing/Landing";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { NotFound } from "../pages/dashboard/NotFound";
export const routes = [
  {
    //public routes with landing page layout
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
