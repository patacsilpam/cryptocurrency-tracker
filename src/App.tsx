import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { useState, useEffect } from "react";
import { supabase } from "./config/supabaseClient";
function App() {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);
  return (
    <div className="relative flex flex-col overflow-hidden w-full text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
