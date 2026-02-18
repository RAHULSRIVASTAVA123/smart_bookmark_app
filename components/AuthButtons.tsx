
"use client";
import { supabase } from "../lib/supabaseClient";


export default function AuthButtons({ user }: { user: any }) {
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className="flex gap-2">
      {!user ? (
        <button onClick={signIn} className="px-4 py-2 bg-blue-600 text-white rounded">
          Sign in with Google
        </button>
      ) : (
        <button onClick={signOut} className="px-4 py-2 bg-red-600 text-white rounded">
          Logout
        </button>
      )}
    </div>
  );
}
