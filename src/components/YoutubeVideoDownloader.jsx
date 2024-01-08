import React, { useState } from 'react';
import VideoToMP3 from './VideoToMP3';
import { downloadFile } from './DownloadVideo';
import '../index.css'
import placeHolder from '../assets/placeHolder.png'

const YouTubeVideoDownloader = () => {
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
    setIsVideoLoaded(false);
  };

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = extractVideoId(url);
    if (id) {
      setVideoId(id);
    }
  };

  const handleDownload = async () => {
    if (!videoId) return;

    try {
      const data = await VideoToMP3.downloadVideo(videoId);
      console.log(data.title)
      downloadFile(data.link, data.title)
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 w-[100dvw]">

      <div className="max-w-[30%] w-full m-4 video" >
        {videoId ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              title="Video de YouTube"
              onLoad={handleOnLoad}
              className="shadow-lg rounded-lg w-full h-full mb-10"
            />

          </>
        ) : (
          <div>
            <img className='rounded-lg border-4 border-darkerDetails' src={placeHolder}></img>
          </div>)}
      </div>

      <form onSubmit={handleSubmit} className="mb-4 flex flex-col max-w-[30%] w-full items-center">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Paste URL here"
          className="p-2 border-4 border-darkerDetails rounded shadow-sm focus:outline-none focus:ring-4 focus:ring-darkerDetails focus:border-transparent max-w-full w-full"
        />
        <div>
          <button type="submit" className="ml-2 px-4 py-2 bg-redDetails font-bold border-4 border-darkerDetails text-white rounded-2xl hover:bg-mediumDetails focus:outline-none focus:ring-1 focus:ring-darkerDetails focus:ring-opacity-50 m-4">
            Load
          </button>
          <button onClick={handleDownload} disabled={!isVideoLoaded} className="px-4 py-2 border-4 border-darkerDetails rounded-2xl bg-redDetails text-white font-bold disabled:rounded-2xl hover:bg-mediumDetails focus:outline-none focus:ring-2 focus:ring-darkerDetails focus:ring-opacity-50 disabled:bg-gray-400 disabled:border-none">
            Download
          </button>
        </div>
      </form>

    </div>
  );
};

export default YouTubeVideoDownloader;
