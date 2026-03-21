# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Health check / DB connection validation

Para validar la conexión a la base de datos desde el frontend se agrega un chequeo de salud en `src/App.jsx`:

- Definir `VITE_API_BASE_URL` en `.env`.
- Consumir `GET {VITE_API_BASE_URL}/health` y evaluar el resultado.
- Estado visible en la barra superior de la app (`conectado`, `offline`, `unhealthy`).

Ejemplo de respuesta de backend esperado:

```json
{ "db": "ok" }
```

## Supabase (creación y conexión)

1. Entra a https://app.supabase.com, crea un proyecto gratuito.
2. En el panel `SQL editor`, se crea la tabla de contacto (ya existe en tu proyecto):

```sql
create table if not exists scr_contact_portafolio (
  id bigint primary key generated always as identity,
  name text not null,
  email_contact text not null,
  comments_menssaje text not null,
  created_at timestamp default now()
);
```

3. En `Authentication > Policies`, habilita acceso `INSERT`, `SELECT` para `scr_contact_portafolio` (anonimous user).
4. Copia desde `Project settings > API`:
   - `API URL`: tiene la forma `https://xyz.supabase.co`
   - `anon public key` (SUPABASE_KEY)

5. Ya está en tu proyecto `.env`:

```
VITE_SUPABASE_URL=https://laaxrsdxiysgsyhlgukn.supabase.co
VITE_SUPABASE_KEY=sb_publishable_EoOwGr5fYpR9vtKTn6JWsQ_nT89KL01
```

6. `src/App.jsx`: chequeo de salud valida `GET ${VITE_SUPABASE_URL}/rest/v1/scr_contact_portafolio?select=id&limit=1`.

7. `src/sections/ContactSection.jsx`: inserta en `scr_contact_portafolio` con mapeo:
   - `name` → campo `name`
   - `email` → campo `email_contact`
   - `message` → campo `comments_menssaje`

8. Ejecuta:

```
npm run dev
```

- Barra superior muestra el estado:
  - ✅ `connected`: tabla accesible
  - ⚠️ `unhealthy`: tabla vacía o problemas
  - ❌ `offline`: falla la llamada
  - ❌ `missing-endpoint` o `missing-key` si faltan variables

- Formulario de contacto:
  - Envía datos a Supabase directamente
  - Respuesta: ✅ éxito → borra campos y muestra mensaje
  - Respuesta: ❌ error → muestra mensaje rojo


