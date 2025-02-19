import { createClient } from "@supabase/supabase-js";
import Google from "@/assets/icons/google.png";
export function GoogleSignin() {
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  const signIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin, // Correct: Redirect to your app's URL
      },
    });
    if (error) {
      console.error("Error signing in with Google", error);
    }
  };
  return (
    <button
      onClick={signIn}
      className="flex justify-center items-center gap-x-4 border border-zinc-700 text-center text-md rounded-full w-full p-3"
    >
      <img src={Google} alt="Google Icon" className=" h-[15px]" />
      Sign in with Google
    </button>
  );
}
