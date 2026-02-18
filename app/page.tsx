"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import AuthButtons from "../components/AuthButtons";
import BookmarkList from "../components/BookmarkList";

export default function Page() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Smart Bookmark App</h1>
      <AuthButtons user={user} />
      {user && <BookmarkList user={user} />}
    </main>
  );
}
