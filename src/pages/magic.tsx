import { Container, Wrapper } from 'src/components/';
import { RunData, runs } from 'src/data/rundata';

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
