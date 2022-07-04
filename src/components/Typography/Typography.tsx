import React, { ReactNode } from 'react';
import { Body1Typography, Body2Typography, TitleTypography } from './Typography.styles';

type TypographyVariant = 'body1' | 'body2' | 'title';

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
};

export const Typography = ({ children, variant }: TypographyProps) => {
  const TypographyVariant = TYPOGRAPHY_VARIANT_MAP[variant];

  return <TypographyVariant variant={variant}>{children}</TypographyVariant>;
};

const TYPOGRAPHY_VARIANT_MAP: {
  [id: string]: (props: TypographyProps) => JSX.Element;
} = {
  body1: Body1Typography,
  body2: Body2Typography,
  title: TitleTypography,
};
