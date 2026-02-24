# McCarthy's BR (Enero 2026) — Vercel + contraseña

## Local
```bash
npm install
# opcional: define creds para probar auth local
# mac/linux:
export BASIC_AUTH_USER=admin
export BASIC_AUTH_PASS=tu_password
npm run dev
```

## Deploy en Vercel (GitHub recomendado)
1) Sube este proyecto a GitHub.
2) En Vercel: **Add New → Project → Import** tu repo.
3) En Vercel → **Settings → Environment Variables**:
   - `BASIC_AUTH_USER` = (ej. `admin`)
   - `BASIC_AUTH_PASS` = (tu contraseña)
4) Redeploy.

Listo: al entrar, el navegador pedirá usuario/contraseña.
