import { DefaultTheme, Interpolation, ThemeProps } from 'styled-components';
import { TypographyVariant } from '../themeValues';

export type TypographyMixins = Record<TypographyVariant, ReadonlyArray<Interpolation<ThemeProps<DefaultTheme>>>>;
