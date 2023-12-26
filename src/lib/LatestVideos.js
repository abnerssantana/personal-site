import { useEffect, useState } from 'react';
import axios from 'axios';

const LatestVideos = ({ videoCount }) => {
  const [latestVideos, setLatestVideos] = useState([]);

  const fetchLatestVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          channelId: 'UCKl5xev9VFkTV0YTHO74DIQ',
          maxResults: videoCount,
          order: 'date',
          type: 'video',
          videoDuration: 'medium',
          key: 'AIzaSyDZ4X2oLeEYyAkQvOxtIET-terp-SZWonk',
        },
      });

      setLatestVideos(response.data.items);
    } catch (error) {
      console.error('Erro ao obter vídeos do YouTube', error);
    }
  };

  useEffect(() => {
    fetchLatestVideos();
  }, [videoCount]);

  return (
    <div className="mt-6">
    <div className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
      {latestVideos.map((video) => (
        <div key={video.id.videoId} className="flex flex-col items-center">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              loading="lazy"
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="mb-2 rounded"
            />
          </a>
          <h3 className="text-xs font-sans font-bold text-gray-900 dark:text-gray-100">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {video.snippet.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LatestVideos;
