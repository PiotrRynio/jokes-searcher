import React, { ReactNode } from 'react';
import { Body1Typography, Body2Typography, TitleTypography } from './Typography.styles';

type TypographyVariant = 'body1' | 'body2' | 'title';

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
  className?: string;
};

export const Typography = (props: TypographyProps) => {
  const TypographyVariant = TYPOGRAPHY_VARIANT_MAP[props.variant];

  return <TypographyVariant {...props}>{props.children}</TypographyVariant>;
};

const TYPOGRAPHY_VARIANT_MAP: {
  [id: string]: (props: TypographyProps) => JSX.Element;
} = {
  body1: Body1Typography,
  body2: Body2Typography,
  title: TitleTypography,
};
