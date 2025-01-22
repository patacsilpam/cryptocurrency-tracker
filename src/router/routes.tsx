import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/landing/Home";
export const routes = [
  {
    //public routes with landing page layout
    path: "/",
    element: <Home />,
  },
];
export const router = createBrowserRouter(routes);
