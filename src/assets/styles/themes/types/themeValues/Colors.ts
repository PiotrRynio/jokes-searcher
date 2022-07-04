export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'secondaryTextWithHover'
  | 'searcher'
  | 'background'
  | 'backgroundWithHover'
  | 'border'
  | 'scrollbarTrack'
  | 'scrollbarThumb';

export type Colors = Record<Color, string>;
