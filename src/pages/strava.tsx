import clsx from 'clsx'
import Link from 'next/link'
import { Container, Wrapper } from 'src/components/'
import axios from 'axios';

const ProfileInfo = () => {
  const [stravaData, setStravaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.strava.com/api/v3/athlete', {
          headers: {
            Authorization: 'Bearer SUA_CHAVE_DE_API',
          },
        });
        setStravaData(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do Strava:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
        <Wrapper>
          <div className="mx-auto pb-24 pt-24 md:pb-36 md:pt-36">
            <div className="text-center">

      {stravaData && (
        <div>
          <p>Nome: {stravaData.firstname} {stravaData.lastname}</p>
          <p>Distância Total: {stravaData.all_ride_totals.distance}</p>
          {/* Adicione mais informações conforme necessário */}
        </div>
      )}
      </div>
          </div>
        </Wrapper>
      </Container>
  );
};

export default strava
