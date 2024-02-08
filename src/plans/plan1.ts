export interface RunData {
  week: string;
  type: string;
  distance: string;
  duration: string;
  pace: string;
  notes: string;
}

export const runs: RunData[] = [
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
