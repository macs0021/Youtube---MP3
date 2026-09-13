# YouTube → MP3

Aplicación web que convierte y descarga vídeos de YouTube como archivos MP3. Pegas la URL, se carga una vista previa del vídeo y con un clic se descarga el audio convertido.

**Demo:** https://macs0019.github.io/Youtube---MP3/

## Cómo funciona

1. El usuario pega la URL de un vídeo de YouTube; se extrae el `videoId` y se muestra un preview embebido.
2. Al pulsar **Download**, la app llama a la API de [RapidAPI - youtube-mp36](https://rapidapi.com/ytjar/api/youtube-mp36) para iniciar la conversión.
3. Como la conversión es asíncrona, la app va **haciendo polling** del endpoint hasta que `status === "ok"` (mostrando el progreso en un único toast que se actualiza), y entonces descarga el MP3 resultante.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) para las llamadas a la API
- [react-toastify](https://fkhadra.github.io/react-toastify/) para las notificaciones

## Puesta en marcha

### Requisitos

- Node.js 18+
- Una API key de RapidAPI para [youtube-mp36](https://rapidapi.com/ytjar/api/youtube-mp36)

### Instalación

```bash
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_KEY=tu_rapidapi_key
```

> ⚠️ Al ser una app 100% cliente (SPA estática), esta key queda incluida en el bundle final y es visible para cualquiera que inspeccione el JS. No uses una key con permisos sensibles ni la reutilices en otros servicios.

### Desarrollo

```bash
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://localhost:5173/Youtube---MP3/`).

### Build de producción

```bash
npm run build
```

Genera los archivos estáticos en `build/`.

### Despliegue en GitHub Pages

```bash
npm run deploy
```

Este comando construye el proyecto (`predeploy`) y publica el contenido de `build/` en la rama `gh-pages` mediante [`gh-pages`](https://www.npmjs.com/package/gh-pages).

## Estructura del proyecto

```
src/
├── components/
│   ├── YoutubeVideoDownloader.jsx  # Componente principal: input, preview y flujo de descarga
│   ├── VideoToMP3.jsx              # Cliente de la API de conversión (RapidAPI)
│   └── DownloadVideo.jsx           # Utilidad para disparar la descarga del archivo en el navegador
├── App.jsx
└── main.jsx
```

## Licencia

Proyecto personal sin licencia especificada.
