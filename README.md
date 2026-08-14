<<<<<<< HEAD
# Anish Kumar Ojha Portfolio

Premium Full Stack Developer portfolio with separate frontend and backend applications.

## Project structure

- `client/` - React + Vite frontend
- `server/` - Node.js + Express backend

## Setup

1. Install dependencies
   - `cd client && npm install`
   - `cd server && npm install`
2. Copy environment files
   - `cp .env.example .env`
   - `cd client && cp ../.env.example .env` (optional for local dev)
   - `cd server && cp ../.env.example .env`
3. Start apps
   - `cd server && npm run dev`
   - `cd client && npm run dev`

## Environment variables

Required server variables:
- `MONGO_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`
- `PORT`
- `API_BASE_URL`
- `FRONTEND_URL`

Optional email configuration:
- `EMAIL_SERVICE`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`

Client variables:
- `VITE_API_BASE_URL`
- `VITE_SITE_TITLE`
- `VITE_SITE_DESCRIPTION`

## Admin setup

1. Create an admin user via API or seed script.
2. Use `/admin/login` to authenticate and manage content.

## Features

- Hero 3D scene with React Three Fiber
- Dynamic projects, certificates, experience, and resume management
- Admin dashboard with JWT auth
- Contact form with message storage
- Dark/light mode, smooth transitions, and responsive UI
=======
# anish_potfolio_rev_1
>>>>>>> 21ac05a528c12b26620a8856f49d4ab12c39e5c7
