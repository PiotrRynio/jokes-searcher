import { Breakpoints, FontSizes, FontWeights, LineHeights } from '../common';
import { Colors, FontFamilies, Typographies } from './themeValues';
import { Mixins } from './mixinsValues';

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  mixins: Mixins;
  typographies: Typographies;
}
