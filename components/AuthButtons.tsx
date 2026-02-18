"use client";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  user: any;
};

export default function AuthButtons({ user }: Props) {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      {user ? (
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      ) : (
        <button onClick={loginWithGoogle} className="px-4 py-2 bg-black text-white rounded">
          Login with Google
        </button>
      )}
    </div>
  );
}
