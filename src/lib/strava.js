// strava.js
const axios = require('axios');

const CLIENT_ID = '118936';
const CLIENT_SECRET = '7859f7faf47a904378933a87a087403857ad8f59';
const ACCESS_TOKEN = 'c2c94a848cb26727e7240a33dbf17b418c0a12d2'; // Pode ser obtido via OAuth ou de outra forma segura

async function getLatestActivities() {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao obter atividades do Strava:', error);
    throw error;
  }
}

module.exports = { getLatestActivities };
