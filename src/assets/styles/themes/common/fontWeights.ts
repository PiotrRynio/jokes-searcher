export type FontWeight = 'light' | 'bold';

export type FontWeights = Record<FontWeight, string>;

export const fontWeights: FontWeights = {
  light: '300',
  bold: '700',
};
