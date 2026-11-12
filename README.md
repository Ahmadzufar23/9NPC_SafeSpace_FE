# 9NPC_SafeSpace_FE
A GitHub repository for SafeSpace's front-end. Made by 9NPC for KSM Android Capstone 2026.

## Menjalankan dengan Docker (bersama backend)

Frontend ini dijalankan sebagai service `frontend` di stack Docker Compose repo backend
([Ahmadzufar23/9NPC_SafeSpace_BE](https://github.com/Ahmadzufar23/9NPC_SafeSpace_BE)), di belakang
gateway nginx. Browser membuka `http://localhost:8080`: path `/` dilayani frontend ini, `/api/` diteruskan ke backend.

- [Dockerfile](Dockerfile): build Vite (`npm run build`) lalu sajikan `dist/` dengan nginx.
- [nginx.conf](nginx.conf): server statis + fallback SPA (`try_files ... /index.html`) dan cache aset.
- Variabel build (`VITE_*`, lihat [.env.example](.env.example)):
  - `VITE_API_BASE_URL` — `/api` saat lewat gateway; jika kosong memakai backend Vercel.
  - `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` — dari project Supabase.

Build manual tanpa Compose:

```bash
docker build -t safespace-frontend --build-arg VITE_API_BASE_URL=/api .
```

## Menjalankan tanpa Docker

```bash
cp .env.example .env   # isi nilai Supabase
npm install
npm run dev
```

## Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.