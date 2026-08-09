# Supabase React Books

A small React app for tracking books I have read. The app uses Supabase for auth and database storage.

## Stack

- React / Create React App
- React Bootstrap
- Supabase JavaScript client
- Supabase Postgres
- GitHub Actions deploy to cPanel over SFTP

## Environment Variables

Create React App requires environment variables to use the `REACT_APP_` prefix.

```env
REACT_APP_SUPABASE_CLIENT_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_PROJECT_KEY=your-publishable-or-anon-key
```

For production, set these as GitHub Actions secrets:

- `REACT_APP_SUPABASE_CLIENT_URL`
- `REACT_APP_SUPABASE_PROJECT_KEY`

## Local Development

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

The production build is written to `build/`.

## Deployment

> **Author deploy only.** [`.github/workflows/main.yml`](.github/workflows/main.yml) is wired for the author’s cPanel/SFTP host. If you clone this repo to run it locally, **ignore or delete** `.github/workflows/` — you do not need it. Without the author’s secrets, Actions will **not** deploy to their server.

Deployment runs through that workflow.

The workflow runs on:

- push to `main`
- manual `workflow_dispatch`

Required GitHub Actions secrets:

- `REACT_APP_SUPABASE_CLIENT_URL`
- `REACT_APP_SUPABASE_PROJECT_KEY`
- `GIT_ACTIONS_CPANEL_REACT_BOOKS_FTP_SERVER`
- `GIT_ACTIONS_CPANEL_REACT_BOOKS_FTP_USERNAME`
- `GIT_ACTIONS_CPANEL_REACT_BOOKS_SSH_PRIVATE_KEY`
- `GIT_ACTIONS_CPANEL_REACT_BOOKS_SSH_PORT` — SSH/SFTP port used for deploy.
- `GIT_ACTIONS_CPANEL_REACT_BOOKS_REMOTE_DIR` — server directory where the `build/` files are uploaded (not committed in the repo).

The deploy step uploads `build/*` to that directory over SCP.

## Notes

- Do not commit `.env` files.
- Do not commit downloaded database backups.
