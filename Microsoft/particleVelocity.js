function particleVelocity(particles) {
  // WRITE YOUR BRILLIANT CODE HERE
  let total_periods = 0;
  const particles_size = particles.length;
  for (let i = 0; i < particles_size; i++) {
      for (let count = 0; i + 2 < particles_size && particles[i + 1] - particles[i] === particles[i + 2] - particles[i + 1]; i++) {
          count++;
          total_periods += count;
      }
  }
  return total_periods < 1000000000 ? total_periods : -1;
}