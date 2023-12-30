// pages/index.js
import React, { useEffect, useState } from 'react';
import { getLatestActivities } from 'src/lib/strava';

const Strava = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await getLatestActivities();
        setActivities(data);
      } catch (error) {
        console.error('Erro ao obter atividades:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Minhas Últimas Atividades no Strava</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Strava;
