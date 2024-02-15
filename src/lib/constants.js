import swimIcon from '../icons/person-swimming-solid.svg'
import bikeIcon from '../icons/person-biking-solid.svg'
import runIcon from '../icons/person-running-solid.svg'
import crossIcon from '../icons/dumbbell-solid.svg'

export const activityDefaults = {
  cross: {
    planColor: 'orange',
    icon: crossIcon
  },
  natação: {
    planColor: 'blue',
    icon: swimIcon
  },
  bike: {
    planColor: 'violet',
    icon: bikeIcon
  },
  corrida: {
    planColor: 'green',
    icon: runIcon
  },
  força: {
    planColor: 'red',
    icon: crossIcon
  }
}

export const activityStyles = {
  regular: {
    style: {
      dividerBackgroundColor: '#111827',
      backgroundColor: '#111827',
      color: 'white'
    }
  },
  long: {
    style: {
      dividerBackgroundColor: 'rgb(234 88 12)',
      backgroundColor: 'rgb(234 88 12)',
      color: 'white'
    }
  },
  workout: {
    style: {
      dividerBackgroundColor: 'rgb(251 191 36)',
      backgroundColor: 'rgb(251 191 36)',
      color: 'white'
    }
  },
  sprints: {
    style: {
      dividerBackgroundColor: 'rgb(220 38 38)',
      backgroundColor: 'rgb(220 38 38)',
      color: 'white'
    }
  },
  strides: {
    style: {
      dividerBackgroundColor: 'rgb(101 163 13)',
      backgroundColor: 'rgb(101 163 13)',
      color: 'white'
    }
  },
  race: {
    style: {
      dividerBackgroundColor: 'rgb(14 165 233)',
      backgroundColor: 'rgb(14 165 233)',
      color: 'white'
    }
  },
  off: {
    style: {
      dividerBackgroundColor: 'rgb(232, 232, 232)',
      backgroundColor: 'rgb(232, 232, 232)',
      color: 'white'
    }
  }
}

export const defaultTimes = {
  fiveK: {
    hours: '00',
    minutes: '25',
    seconds: '00'
  },
  tenK: {
    hours: '00',
    minutes: '45',
    seconds: '00'
  },
  halfM: {
    hours: '01',
    minutes: '40',
    seconds: '00'
  },
  fullM: {
    hours: '03',
    minutes: '30',
    seconds: '00'
  }
}

export const defaultTimeLabels = {
  fiveK: '5K',
  tenK: '10K',
  halfM: '21K',
  fullM: '42K'
}
