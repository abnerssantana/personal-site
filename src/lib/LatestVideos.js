import { useEffect, useState } from 'react';
import axios from 'axios';

const LatestVideos = () => {
    const [latestVideos, setLatestVideos] = useState([]);
  
    const fetchLatestVideos = async () => {
      try {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
        const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          channelId: 'UCKl5xev9VFkTV0YTHO74DIQ',
          maxResults: 4,
          order: 'date',
          type: 'video',
          videoDuration: 'any',
          publishedAfter: oneWeekAgo.toISOString(),
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
  }, []);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {latestVideos.map((video) => (
        <div key={video.id.videoId} className="flex flex-col items-center">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="mb-2 rounded"
            />
          </a>
          <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-100">
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
  );
};

export default LatestVideos;
