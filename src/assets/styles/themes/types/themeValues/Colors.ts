export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'secondaryTextWithHover'
  | 'linkText'
  | 'searcher'
  | 'background'
  | 'backgroundWithHover'
  | 'border'
  | 'scrollbarTrack'
  | 'scrollbarThumb';

export type Colors = Record<Color, string>;
