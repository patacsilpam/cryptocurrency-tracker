import { supabase } from "@/config/supabaseClient";
import Google from "@/assets/icons/google.png";
import { ReactNode } from "react";

interface GoogleSigninProps {
  children: ReactNode;
}

export function GoogleSignin({ children }: GoogleSigninProps) {
  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/dashboard", // Correct: Redirect to your app's URL
      },
    });
    if (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <button
      onClick={signIn}
      className="flex items-center justify-center gap-x-4 w-full p-3 text-md text-center border border-zinc-700 text-white rounded-full"
    >
      <img src={Google} alt="Google Icon" className="h-[15px]" />
      {children}
    </button>
  );
}
