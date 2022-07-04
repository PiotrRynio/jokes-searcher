export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'secondaryTextWithHover'
  | 'linkText'
  | 'searcher'
  | 'background'
  | 'backgroundWithHover'
  | 'border'
  | 'scrollbarTrackPiece'
  | 'scrollbarThumb';

export type Colors = Record<Color, string>;
