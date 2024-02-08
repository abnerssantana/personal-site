import { Container, Wrapper } from 'src/components/'

export const NotFound = () => {
  return (
    <>
      <Container title="About me">
        <Wrapper>
          <div className="mx-auto min-h-full pt-20 pb-20 text-center sm:pt-40 sm:pb-40">
            <div key="1" className="w-full overflow-auto rounded-lg border">
              <table className="w-full text-sm leading-none">
                <thead>
                  <tr className="border-b last:border-b-0 border-t">
                    <th className="px-4 py-3 text-left first:rounded-tl-lg">Week</th>
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">Distance</th>
                    <th className="px-4 py-3 text-left">Duration</th>
                    <th className="px-4 py-3 text-left">Pace</th>
                    <th className="px-4 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b last:border-b-0">
                    <td className="px-4 py-3 text-left font-medium first:rounded-bl-lg">Monday</td>
                    <td className="px-4 py-3 text-left">Endurance</td>
                    <td className="px-4 py-3 text-left">5 mi</td>
                    <td className="px-4 py-3 text-left">45 min</td>
                    <td className="px-4 py-3 text-left">9:00/mi</td>
                    <td className="px-4 py-3 text-left">Long, steady run</td>
                  </tr>
                  <tr className="border-b last:border-b-0 bg-gray-50">
                    <td className="px-4 py-3 text-left font-medium">Tuesday</td>
                    <td className="px-4 py-3 text-left">Speed</td>
                    <td className="px-4 py-3 text-left">3 mi</td>
                    <td className="px-4 py-3 text-left">25 min</td>
                    <td className="px-4 py-3 text-left">8:20/mi</td>
                    <td className="px-4 py-3 text-left">Intervals: 400m repeats</td>
                  </tr>
                  <tr className="border-b last:border-b-0">
                    <td className="px-4 py-3 text-left font-medium">Wednesday</td>
                    <td className="px-4 py-3 text-left">Rest</td>
                    <td className="px-4 py-3 text-left">-</td>
                    <td className="px-4 py-3 text-left">-</td>
                    <td className="px-4 py-3 text-left">-</td>
                    <td className="px-4 py-3 text-left">Rest day</td>
                  </tr>
                  <tr className="border-b last:border-b-0 bg-gray-50">
                    <td className="px-4 py-3 text-left font-medium">Thursday</td>
                    <td className="px-4 py-3 text-left">Tempo</td>
                    <td className="px-4 py-3 text-left">4 mi</td>
                    <td className="px-4 py-3 text-left">32 min</td>
                    <td className="px-4 py-3 text-left">8:00/mi</td>
                    <td className="px-4 py-3 text-left">Comfortably hard run</td>
                  </tr>
                  <tr className="border-b last:border-b-0">
                    <td className="px-4 py-3 text-left font-medium">Friday</td>
                    <td className="px-4 py-3 text-left">Easy</td>
                    <td className="px-4 py-3 text-left">3 mi</td>
                    <td className="px-4 py-3 text-left">28 min</td>
                    <td className="px-4 py-3 text-left">9:20/mi</td>
                    <td className="px-4 py-3 text-left">Recovery run</td>
                  </tr>
                  <tr className="border-b last:border-b-0 bg-gray-50">
                    <td className="px-4 py-3 text-left font-medium">Saturday</td>
                    <td className="px-4 py-3 text-left">Long</td>
                    <td className="px-4 py-3 text-left">8 mi</td>
                    <td className="px-4 py-3 text-left">70 min</td>
                    <td className="px-4 py-3 text-left">8:45/mi</td>
                    <td className="px-4 py-3 text-left">Weekend long run</td>
                  </tr>
                  <tr className="border-b last:border-b-0">
                    <td className="px-4 py-3 text-left font-medium last:rounded-bl-lg">Sunday</td>
                    <td className="px-4 py-3 text-left">Recovery</td>
                    <td className="px-4 py-3 text-left">3 mi</td>
                    <td className="px-4 py-3 text-left">30 min</td>
                    <td className="px-4 py-3 text-left">10:00/mi</td>
                    <td className="px-4 py-3 text-left">Easy shakeout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default NotFound
