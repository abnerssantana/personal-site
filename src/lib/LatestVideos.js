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
          maxResults: videoCount, // Utilizando a propriedade videoCount
          order: 'date',
          type: 'video',
          videoDuration: 'any',
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
  }, [videoCount]); // Adicionando videoCount como dependência para atualizar quando a propriedade mudar

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-normal text-gray-600 dark:text-gray-400 md:text-lg">
        Últimos vídeos
      </h2>

      <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
    </div>
  );
};

export default LatestVideos;
