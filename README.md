# CamiloTechCore Portfolio

Portfolio personal construido con **React + Vite**, conectado a **Supabase** como base de datos.

## 🚀 Stack tecnológico

- **Frontend**: React 18 + Vite
- **Base de datos**: Supabase (PostgreSQL)
- **Styles**: Tailwind CSS
- **Routing**: React Router v7
- **Internacionalización**: i18next
- **Animaciones**: Framer Motion

## 📋 Tabla de contenidos

- [Instalación](#instalación)
- [Configuración de Supabase](#configuración-de-supabase)
- [Ejecutar en desarrollo](#ejecutar-en-desarrollo)
- [Features](#features)

## 💻 Instalación

```bash
npm install
```

## 🗄️ Configuración de Supabase

### Crear proyecto en Supabase

1. Accede a [https://app.supabase.com](https://app.supabase.com)
2. Crea un nuevo proyecto (opción gratuita disponible)
3. Espera a que se inicialice la BD

### Crear tabla de contactos

En el panel **SQL Editor** de Supabase, ejecuta:

```sql
create table if not exists scr_contact_portafolio (
  id bigint primary key generated always as identity,
  name text not null,
  email_contact text not null,
  comments_menssaje text not null,
  created_at timestamp default now()
);
```

### Configurar Row Level Security (RLS)

En la tabla `scr_contact_portafolio` → **Authentication** → **Policies**:

1. **Política INSERT** (`Allow anonymous INSERT`):
   - Command: `INSERT`
   - With Check: `true`

2. **Política SELECT** (`Allow anonymous SELECT`):
   - Command: `SELECT`
   - Using: `true`

### Variables de entorno

Copia desde **Project settings > API**:
- `API URL`
- `anon public` key

Crea archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=https://laaxrsdxiysgsyhlgukn.supabase.co
VITE_SUPABASE_KEY=sb_publishable_EoOwGr5fYpR9vtKTn6JWsQ_nT89KL01
```

> **⚠️ Seguridad**: `.env` está en `.gitignore`, no se subirá al repositorio.

## 🚀 Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Banner de estado BD

En la barra superior verás el estado de conexión con Supabase:
- ✅ **Conexión a base de datos OK**: todo funciona
- ⚠️ **Conexión establecida pero no óptima**: tabla vacía o error leve
- ❌ **No se pudo conectar**: falla de red o credenciales inválidas
- ❌ **Falta VITE_SUPABASE_URL/KEY**: variables de entorno no configuradas
- ⏳ **Verificando**: chequeo inicial en curso

## 📝 Formulario de contacto

Envía mensajes directamente a Supabase:

```
Nombre → campo "name"
Email → campo "email_contact"
Mensaje → campo "comments_menssaje"
```

Respuestas:
- ✅ **Éxito**: campos limpiados + mensaje verde
- ❌ **Error**: mensaje rojo con detalles

El chequeo de salud se realiza automáticamente cada 30 segundos.

## 📦 Scripts disponibles

- `npm run dev` — Inicia servidor de desarrollo
- `npm run build` — Compila para producción
- `npm run preview` — Previsualiza build
- `npm run lint` — Valida código

## 📄 Licencia

MIT

---

**Nota**: Este proyecto está optimizado para demostración de portfolio. Para producción, considera:
- Validar datos en backend
- Usar variables de entorno más seguras
- Implementar rate limiting
- Adicionar autenticación


