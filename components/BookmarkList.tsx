
"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";


export default function BookmarkList({ user }: { user: any }) {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const load = async () => {
    const { data } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    setBookmarks(data || []);
  };

  useEffect(() => {
    load();
    const channel = supabase
      .channel("realtime-bookmarks")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "bookmarks", filter: `user_id=eq.${user.id}` },
        () => load()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const addBookmark = async () => {
    if (!title || !url) return;
    await supabase.from("bookmarks").insert({ title, url, user_id: user.id });
    setTitle("");
    setUrl("");
  };

  const deleteBookmark = async (id: string) => {
    await supabase.from("bookmarks").delete().eq("id", id);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded w-1/2"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={addBookmark} className="px-4 py-2 bg-green-600 text-white rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {bookmarks.map((b) => (
          <li key={b.id} className="flex justify-between bg-white p-3 rounded shadow">
            <a href={b.url} target="_blank" className="text-blue-600 underline">
              {b.title}
            </a>
            <button onClick={() => deleteBookmark(b.id)} className="text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
