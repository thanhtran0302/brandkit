const base = 4;

const generateSpacing = (ratio: number): string => `${base * ratio}px`;

export default {
  100: generateSpacing(25),
  80: generateSpacing(20),
  64: generateSpacing(15),
  56: generateSpacing(14),
  48: generateSpacing(12),
  40: generateSpacing(10),
  32: generateSpacing(8),
  24: generateSpacing(6),
  20: generateSpacing(5),
  16: generateSpacing(4),
  12: generateSpacing(3),
  8: generateSpacing(2),
  4: generateSpacing(1)
};
