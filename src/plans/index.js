import planmeiamaratona from './planmeiamaratona.json'
import fullMarathonNovicePlan from './fullMNovicePlan.json'
import fullMarathonIntermediatePlan from './fullMIntermediatePlan.json'
import fullMarathonAdvancedPlan from './fullMAdvancedPlan.json'
import sprintBeginner from './sprintTriathalonBeginner.json'
import fortacorrida from './fortacorrida.json'

const plans = [
  {
    name: 'Meia Maratona (intermediário)',
    coach: 'Abner Santana',
    path: 'meia-marathon-intermediário',
    duration: '12 semanas',
    activities: ['corrida'],
    data: planmeiamaratona,
    distances: ['fiveK', 'tenK']
  },
  {
    name: 'Fortalecimento para corredores',
    coach: 'Abner Santana',
    path: 'fortalecimento-corredores',
    duration: '2x por semana',
    activities: ['força'],
    data: fortacorrida,
    distances: null
  }
]
export default plans
