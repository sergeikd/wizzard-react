export const brand = [
  {
    'id': 1,
    'name': 'Audi'
  },
  {
    'id': 2,
    'name': 'BMW'
  },
  {
    'id': 3,
    'name': 'Mercedes'
  }];

 export const model = [
  {
    'id': 1,
    'name': 'X1',
    'brandId': 2,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 2,
    'name': 'X3',
    'brandId': 2,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 3,
    'name': 'X5',
    'brandId': 2,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 4,
    'name': 'GLA',
    'brandId': 3,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 5,
    'name': 'GLC',
    'brandId': 3,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 6,
    'name': 'GLE',
    'brandId': 3,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2]
  },
  {
    'id': 7,
    'name': 'Q3',
    'brandId': 1,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2, 3]
  },
  {
    'id': 8,
    'name': 'Q5',
    'brandId': 1,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2, 3]
  },
  {
    'id': 9,
    'name': 'Q7',
    'brandId': 1,
    'availableEngineIds': [1, 2],
    'availableGearsIds': [1, 2, 3]
  }
];

export const engine = [
  {
    'id': 1,
    'name': 'benzin'
  },
  {
    'id': 2,
    'name': 'diesel'
  }
];

export const gear = [
  {
    'id': 1,
    'name': 'manual'
  },
  {
    'id': 2,
    'name': 'automatic'
  },
  {
    'id': 3,
    'name': 'robotic'
  }
];
