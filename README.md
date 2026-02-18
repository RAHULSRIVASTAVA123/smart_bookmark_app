🔖 Smart Bookmark Manager

A full-stack bookmark manager built with Next.js 14 and Supabase.
Users can sign in with Google, add bookmarks (title + URL), and securely view their own saved bookmarks.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🌐 Live Demo: https://smart-bookmark-app.vercel.app

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Tech Stack

Frontend: Next.js 14 (App Router)

Backend & Database: Supabase (Postgres)

Authentication: Supabase Auth (Google OAuth)

Hosting: Vercel

Security: Row Level Security (RLS)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✨ Features

1) Google OAuth Login (Supabase Auth)

2) User-specific bookmarks (secured with RLS)

3) Add bookmarks (Title + URL)

4) Delete bookmarks

5) Instant UI updates (no page reload)

6) Fully deployed on Vercel
7) ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

🏗️ Overall Approach
(i) Frontend

Built using Next.js 14 App Router with client-side state updates for a smooth user experience.

(ii) Supabase Integration

Used Supabase for:

Authentication (Google OAuth)

(*)Database (Postgres)

Row Level Security (RLS) for data privacy

(iii) Deployment

Production build deployed on Vercel

Environment variables managed via:

.env.local (local)

Vercel Project Settings (production)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔐 Authentication & User Privacy

Authentication handled by Supabase Auth (Google OAuth)

Each bookmark is linked to a user_id

Row Level Security (RLS) ensures:

Users can only read their own bookmarks

Users can only insert/delete their own data

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔎 Example RLS Logic
bookmarks.user_id = auth.uid()
⚡ Real-Time / Live Updates

After adding or deleting a bookmark:

Supabase client queries are triggered

React state updates instantly

No full page reload required

Data is refetched after insert/delete for consistency
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🗄️ Database Schema
Table: bookmarks
Column	Type	Description
id	uuid (PK)	Primary key
title	text	Bookmark title
url	text	Bookmark URL
user_id	uuid	References auth.users.id
created_at	timestamp	Auto-generated timestamp
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🖥️ Local Setup
git clone https://github.com/RAHULSRIVASTAVA123/smart_bookmark_app.git
cd smart_bookmark_app
npm install
Create .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
Run the Project
npm run dev

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
App will run on:
👉 http://localhost:3000

------------------------------------------------

🚀 Deployment

Deployed using Vercel

Environment Variables Added In:

Vercel → Project → Settings → Environment Variables

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

Google OAuth Redirect URLs Configured:
http://localhost:3000
https://smart-bookmark-app.vercel.app

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Challenges Faced & Solutions
1️1) Google OAuth Redirect Errors

Problem:
redirect_uri_mismatch error on production login.

Solution:

Added correct callback URL in Google Cloud:

https://<project-id>.supabase.co/auth/v1/callback

Added production domain in:
Supabase → Authentication → URL Configuration

2️) Environment Variables Not Loading on Vercel

Problem:
Build failed with:

supabaseUrl is required

Solution:

Added environment variables in:
Vercel → Project → Settings → Environment Variables

Redeployed the project

3️) Build Errors on Vercel

Problem:
Module not found / TypeScript prop mismatch errors

Solution:

Fixed import paths (@/lib/supabaseClient)

Added proper TypeScript typing to components

Tested production build locally before deploying

4️) Data Not Visible After Insert

Problem:
Bookmarks were added but not visible.

Solution:

Fixed Supabase RLS policies

Ensured queries filter by user_id

Refetched data after insert
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

🔮 Future Improvements

Bookmark categories / tags

Search & filter functionality

Favicon preview

Public shareable collections

Drag & drop reordering
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

👨‍💻 Author

Rahul Srivastava

Built as part of a technical challenge to demonstrate:

Full-stack development

Authentication

Database security

Production deployment
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📝 After Adding README
git add README.md
