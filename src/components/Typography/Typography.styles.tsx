import styled from 'styled-components';

export const Body1Typography = styled.p`
  ${({ theme }) => theme.mixins.typography.body1};
`;

export const Body2Typography = styled.p`
  ${({ theme }) => theme.mixins.typography.body2};
`;

export const TitleTypography = styled.h2`
  ${({ theme }) => theme.mixins.typography.title};
`;
