import { fontSizes, fontWeights, lineHeights } from '../../common';
import { fontFamilies } from './fontFamilies';
import { Typographies } from '../../types';
import { colors } from './colors';

export const typographies: Typographies = {
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.light,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  body2: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.light,
    fontFamily: fontFamilies.primary,
    color: colors.secondaryText,
  },

  title: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },
};
