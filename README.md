# Next.js Supabase Authentication and Profile Cookie

This repository provides a step-by-step guide on how to set up authentication using Supabase in a Next.js App Router environment. After authenticating, the user's profile data is fetched from the `profiles` table in Supabase and stored in an HTTP-only cookie. This enables secure handling of session data on the server and client.

## Features

- Supabase authentication using email and password
- Fetching user profile from Supabase's `profiles` table
- Storing profile data in a secure HTTP-only cookie
- Accessible user profile data on a protected dashboard route

---

## Prerequisites

Before getting started, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Next.js](https://nextjs.org/) (v13 with App Router support)
- [Supabase Account](https://supabase.io/)

---

## Project Setup

### 1. Clone the Repository

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yabenz/next-supabase-auth-cookie
