import { useEffect, useState } from 'react';
import axios from 'axios';

const LatestVideos = () => {
  const [latestVideos, setLatestVideos] = useState([]);

  const fetchLatestVideos = async () => {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          channelId: 'UCKl5xev9VFkTV0YTHO74DIQ',
          maxResults: 4,
          order: 'date',
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
    <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-1">
      {latestVideos.map((video) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          {/* Adicione mais detalhes do vídeo conforme necessário */}
        </div>
      ))}
    </div>
  );
};

export default LatestVideos;
