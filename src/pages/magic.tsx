import { Container, Wrapper } from 'src/components/';

interface RunData {
  week: string;
  type: string;
  distance: string;
  duration: string;
  pace: string;
  notes: string;
}

const runs: RunData[] = [
  {
    week: 'Monday',
    type: 'Endurance',
    distance: '5 mi',
    duration: '45 min',
    pace: '9:00/mi',
    notes: 'Long, steady run',
  },
  {
    week: 'Tuesday',
    type: 'Speed',
    distance: '3 mi',
    duration: '25 min',
    pace: '8:20/mi',
    notes: 'Intervals: 400m repeats',
  },
  {
    week: 'Wednesday',
    type: 'Rest',
    distance: '-',
    duration: '-',
    pace: '-',
    notes: 'Rest day',
  },
  {
    week: 'Thursday',
    type: 'Tempo',
    distance: '4 mi',
    duration: '32 min',
    pace: '8:00/mi',
    notes: 'Comfortably hard run',
  },
  {
    week: 'Friday',
    type: 'Easy',
    distance: '3 mi',
    duration: '28 min',
    pace: '9:20/mi',
    notes: 'Recovery run',
  },
  {
    week: 'Saturday',
    type: 'Long',
    distance: '8 mi',
    duration: '70 min',
    pace: '8:45/mi',
    notes: 'Weekend long run',
  },
  {
    week: 'Sunday',
    type: 'Recovery',
    distance: '3 mi',
    duration: '30 min',
    pace: '10:00/mi',
    notes: 'Easy shakeout',
  },
];

export const Magic = () => {
  return (
    <>
      <Container title="Magic Run">
        <Wrapper>
          <div className="mx-auto min-h-full pt-20 pb-20 text-center sm:pt-40 sm:pb-40">
            <div key="1" className="w-full overflow-auto rounded-lg border">
              <table className="w-full text-sm leading-none">
                <thead>
                  <tr className="border-b last:border-b-0 border-t">
                    {Object.keys(runs[0]).map((key) => (
                      <th key={key} className="px-4 py-3 text-left first:rounded-tl-lg">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {runs.map((run, index) => (
                    <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                      {Object.values(run).map((value, index) => (
                        <td key={index} className={`px-4 py-3 text-left ${index === 0 ? 'font-medium' : ''}`}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Magic;
