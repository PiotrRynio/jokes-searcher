import { css } from 'styled-components';
import { TypographyMixins } from '../../types/mixinsValues/TypographyMixins';

export const typographyMixins: TypographyMixins = {
  body1: css`
    font-size: ${({ theme }) => theme.typographies.body1.fontSize};
    line-height: ${({ theme }) => theme.typographies.body1.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.body1.fontWeight};
    font-family: ${({ theme }) => theme.typographies.body1.fontFamily};
    color: ${({ theme }) => theme.typographies.body1.color};
  `,

  body2: css`
    font-size: ${({ theme }) => theme.typographies.body2.fontSize};
    line-height: ${({ theme }) => theme.typographies.body2.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.body2.fontWeight};
    font-family: ${({ theme }) => theme.typographies.body2.fontFamily};
    color: ${({ theme }) => theme.typographies.body2.color};
  `,

  title: css`
    font-size: ${({ theme }) => theme.typographies.title.fontSize};
    line-height: ${({ theme }) => theme.typographies.title.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.title.fontWeight};
    font-family: ${({ theme }) => theme.typographies.title.fontFamily};
    color: ${({ theme }) => theme.typographies.title.color};
  `,
};
