import { getRedirectStatus } from 'next/dist/lib/check-custom-routes';

const base: number = 16;
const generateFontSize = (ratio: number): string =>
  `${(1 / base) * (base * ratio)}rem`;

export default {
  base: generateFontSize(1),
  12: generateFontSize(0.75),
  13: generateFontSize(0.8125),
  14: generateFontSize(0.875),
  20: generateFontSize(1.25),
  24: generateFontSize(1.5),
  32: generateFontSize(2),
  48: generateFontSize(3)
};
