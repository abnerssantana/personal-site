export interface RunData {
  week: string;
  type: string;
  distance: string;
  duration: string;
  pace: string;
  notes: string;
}

export interface PlanData {
  title: string;
  runs: RunData[];
}

export const plans: PlanData[] = [
  {
    title: 'Beginner Plan',
    runs: [
      {
        week: 'Week 1',
        type: 'Easy',
        distance: '3 mi',
        duration: '30 min',
        pace: '10:00/mi',
        notes: 'Easy start',
      },
      {
        week: 'Week 2',
        type: 'Speed',
        distance: '2 mi',
        duration: '20 min',
        pace: '9:00/mi',
        notes: 'Intervals: 200m repeats',
      },
      // ... adicione mais corridas conforme necessário ...
    ],
  },
  {
    title: 'Intermediate Plan',
    runs: [
      {
        week: 'Week 1',
        type: 'Endurance',
        distance: '4 mi',
        duration: '40 min',
        pace: '9:30/mi',
        notes: 'Building stamina',
      },
      {
        week: 'Week 2',
        type: 'Tempo',
        distance: '3 mi',
        duration: '25 min',
        pace: '8:30/mi',
        notes: 'Maintaining speed',
      },
      // ... adicione mais corridas conforme necessário ...
    ],
  },
  // Adicione mais planos conforme necessário
];

// Dados padrão, que serão exibidos se nenhum plano for selecionado
export const defaultPlan: PlanData = {
  title: 'Default Plan',
  runs: [
    {
      week: 'Week 1',
      type: 'Rest',
      distance: '-',
      duration: '-',
      pace: '-',
      notes: 'Rest day',
    },
    {
      week: 'Week 2',
      type: 'Easy',
      distance: '2 mi',
      duration: '18 min',
      pace: '9:00/mi',
      notes: 'Light jog',
    },
    // ... adicione mais corridas conforme necessário ...
  ],
};
