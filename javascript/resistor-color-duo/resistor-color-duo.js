//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
];

export const decodedValue = ([color1, color2]) => {
  const one =  COLORS.indexOf(color1)
  const two =  COLORS.indexOf(color2)

  return parseInt(`${one}${two}`)
};
