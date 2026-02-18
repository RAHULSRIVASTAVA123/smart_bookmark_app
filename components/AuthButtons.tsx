
"use client";
import { supabase } from "../lib/supabaseClient";


export default function AuthButtons() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin, 
      },
    });
  };

  return (
    <button
      onClick={loginWithGoogle}
      className="px-4 py-2 rounded bg-black text-white"
    >
      Login with Google
    </button>
  );
}
