# YouTube → MP3

A web app that converts and downloads YouTube videos as MP3 files. Paste a URL, get a preview of the video, and download the converted audio with one click.

**Demo:** https://macs0019.github.io/Youtube---MP3/

## How it works

1. The user pastes a YouTube video URL; the `videoId` is extracted and an embedded preview is shown.
2. On clicking **Download**, the app calls the [RapidAPI - youtube-mp36](https://rapidapi.com/ytjar/api/youtube-mp36) API to start the conversion.
3. Since conversion is asynchronous, the app **polls** the endpoint until `status === "ok"` (showing progress in a single toast that updates in place), then downloads the resulting MP3.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) for API calls
- [react-toastify](https://fkhadra.github.io/react-toastify/) for notifications

## Getting started

### Requirements

- Node.js 18+
- A RapidAPI key for [youtube-mp36](https://rapidapi.com/ytjar/api/youtube-mp36)

### Install

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
VITE_API_KEY=your_rapidapi_key
```

> ⚠️ Since this is a fully client-side SPA, this key ends up embedded in the final bundle and is visible to anyone who inspects the JS. Don't use a key with sensitive permissions or reuse it for other services.

### Development

```bash
npm run dev
```

Open the URL Vite prints (defaults to `http://localhost:5173/Youtube---MP3/`).

### Production build

```bash
npm run build
```

Outputs static files to `build/`.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project (`predeploy`) and publishes the contents of `build/` to the `gh-pages` branch via [`gh-pages`](https://www.npmjs.com/package/gh-pages).

## Project structure

```
src/
├── components/
│   ├── YoutubeVideoDownloader.jsx  # Main component: input, preview, and download flow
│   ├── VideoToMP3.jsx              # Conversion API client (RapidAPI)
│   └── DownloadVideo.jsx           # Helper to trigger the browser file download
├── App.jsx
└── main.jsx
```

## License

Personal project, no license specified.
