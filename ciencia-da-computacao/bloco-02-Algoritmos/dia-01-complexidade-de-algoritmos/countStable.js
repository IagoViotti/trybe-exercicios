// https://algo.monster/problems/particle_velocity
//  teste desse site aqui


particlePeriods = [-1, 1, 3, 3, 3, 2, 3, 2, 1, 0]

const countStable = (particlePeriods) => {
  let count = 0;
  let stableCount = 0;

  for (let i = 0; i < particlePeriods.length; i++) {
    if (particlePeriods[i + 1] - particlePeriods[i] === particlePeriods[i + 2] - particlePeriods[i + 1]) {
      count += 1;
      stableCount += count;
    } else {
      count = 0;
    }
  }
  return stableCount < 100000000 ? stableCount : -1;
};

console.log(countStable(particlePeriods));