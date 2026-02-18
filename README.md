🔖 Smart Bookmark App

A simple full-stack web app to save, view, and manage bookmarks with authentication.
Built using Next.js (App Router), Supabase (Auth + Database), and Tailwind CSS.

🚀 Features

 User authentication (Google / Email via Supabase)

 Add bookmarks (title + URL)

 View your saved bookmarks

 Delete bookmarks

Data persists in Supabase (cloud database)

 Protected data per user

 Responsive UI with Tailwind CSS

🛠 Tech Stack

Frontend: Next.js 14 (React, App Router)

Backend / DB: Supabase (PostgreSQL + Auth)

Styling: Tailwind CSS

Deployment: Vercel

 Setup & Installation
1) Clone the repo
git clone https://github.com/<your-username>/smart-bookmark-app.git
cd smart-bookmark-app

2️2) Install dependencies
npm install

 Environment Variables

Create a file called .env.local in the project root:

touch .env.local


Add this inside it:

NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_ANON_KEY


👉You can find these in:
Supabase Dashboard → Project Settings → API

▶️ Run Locally
npm run dev


Open:
 http://localhost:3000

 Database Schema (Supabase)

Create a table called bookmarks:

Column	Type
id	uuid (PK)
title	text
url	text
user_id	uuid (FK)
created_at	timestamp

Enable Row Level Security (RLS):

