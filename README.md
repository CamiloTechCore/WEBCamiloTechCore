# WEBCamiloTechCore Portfolio

Portfolio personal construido con **React + Vite** y un formulario de contacto que envía datos a **Google Sheets** mediante **Apps Script**.

## 🚀 Stack tecnológico

- **Frontend**: React 18 + Vite
- **Backend**: Google Apps Script / Google Sheets
- **Styles**: Tailwind CSS
- **Routing**: React Router v7
- **Internacionalización**: i18next
- **Animaciones**: Framer Motion

## 📋 Tabla de contenidos

- [Instalación](#instalación)
- [Configuración de Google Sheets](#configuración-de-google-sheets)
- [Ejecutar en desarrollo](#ejecutar-en-desarrollo)
- [Features](#features)

## 💻 Instalación

```bash
npm install
```

## 🗄️ Configuración de Google Sheets

1. Crea un Google Spreadsheet y nómbralo como quieras.
2. Crea una hoja llamada `BD`.
3. Despliega un Google Apps Script que acepte `POST` y escriba los datos en la hoja `BD`.
4. Copia el URL del script desplegado como app web.
5. Crea un archivo `.env` en la raíz del proyecto con esta variable:

```env
VITE_GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

> **⚠️ Importante**: `.env` debe estar en `.gitignore` para que no se suba al repositorio.

## 🚀 Ejecutar en desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 📝 Formulario de contacto

Envía mensajes directamente a Google Sheets mediante Apps Script.

Crea el Apps Script para recibir los campos:

```json
{
  "name": "...",
  "email": "...",
  "message": "..."
}
```

Respuestas:
- ✅ **Éxito**: campos limpiados + mensaje verde
- ❌ **Error**: mensaje rojo con detalles

> Si no configuras `VITE_GOOGLE_SHEETS_SCRIPT_URL`, el formulario mostrará un error local y no enviará los datos.

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


