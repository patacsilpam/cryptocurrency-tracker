import { createClient } from "@supabase/supabase-js";
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
      className="border text-center text-sm p-2 px-4 rounded-lg w-full md:w-[130px] mr-2"
    >
      Get Started
    </button>
  );
}
