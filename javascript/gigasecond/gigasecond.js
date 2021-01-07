//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (startDate) => {
  const startTime = startDate.getTime();
  const endDate = new Date(startTime + (Math.pow(10, 9)*1000))
  return endDate
};
