export interface RunData {
  dia: string;
  type: string;
  distance: string;
  duration: string;
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
        dia: 'dia 1',
        type: 'Easy',
        distance: '3 mi',
        duration: '30 min',
        notes: 'Easy start',
      },
      {
        dia: 'dia 2',
        type: 'Speed',
        distance: '2 mi',
        duration: '20 min',
        notes: 'Intervals: 200m repeats',
      },
      // ... adicione mais corridas conforme necessário ...
    ],
  },
  {
    title: 'Intermediate Plan',
    runs: [
      {
        dia: 'dia 1',
        type: 'Endurance',
        distance: '4 mi',
        duration: '40 min',
        notes: 'Building stamina',
      },
      {
        dia: 'dia 2',
        type: 'Tempo',
        distance: '3 mi',
        duration: '25 min',
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
      dia: 'dia 1',
      type: 'Rest',
      distance: '-',
      duration: '-',
      notes: 'Rest day',
    },
    {
      dia: 'Week 2',
      type: 'Easy',
      distance: '2 mi',
      duration: '18 min',
      notes: 'Light jog',
    },
    // ... adicione mais corridas conforme necessário ...
  ],
};
