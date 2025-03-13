import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/landing/Home";
import { Dashboard } from "@/pages/dashboard/page";
import { News } from "@/pages/news/page";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [session, setSession] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(!!session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loadding...</div>;
  }
  return session ? children : <Navigate to="/auth/login" replace />;
};

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/news",
    element: (
      <PrivateRoute>
        <News />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <Navigate to="/auth/login" replace /> },
];

export const router = createBrowserRouter(routes);
