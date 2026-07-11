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
4. Copia la URL del script desplegado como app web.
5. Crea un archivo `.env` en la raíz del proyecto con esta variable:

```env
VITE_GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

> **⚠️ Importante**: `.env` debe estar en `.gitignore` para que no se suba al repositorio.

> **Nota**: la app usa `mode: 'no-cors'` cuando envía el formulario a Apps Script, porque la URL del script no devuelve los encabezados CORS completos para navegadores.

### Ejemplo de Apps Script

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('1FZYcM4kIaJeSZuO2atQSicPC5GrUd8JfhB6A_ZG94-o').getSheetByName('BD');
  const payload = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), payload.name, payload.email, payload.message]);
  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
}
```

> Reinicia el servidor de Vite después de editar `.env` para que la variable se cargue correctamente.

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


