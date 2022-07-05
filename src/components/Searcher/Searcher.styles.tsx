import styled from 'styled-components';
import { Typography } from '../Typography';

export const StyledLabel = styled.label`
  z-index: 6;
  position: relative;
`;

export const StyledInput = styled.input`
  ${({ theme }) => theme.mixins.typography.body2};
  width: 240px;
  height: 54px;
  padding: 16px 48px 16px 24px;
  border: 2px solid ${({ theme }) => theme.colors.searcher};
  border-radius: 8px;
  background-color: transparent;
  outline: none;
`;

export const IconContainer = styled.div<{ isClickable?: boolean }>`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 8px;
  display: flex;
  width: 32px;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.searcher};
`;

export const SearchedJokesList = styled.ul`
  z-index: 1;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  overflow-y: auto;
  max-height: 272px;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  list-style: none;
`;

export const StyledTypography = styled(Typography)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SearchedJokesListItem = styled.li`
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundWithHover};

    ${StyledTypography} {
      color: ${({ theme }) => theme.colors.secondaryTextWithHover};
    }
  }
`;
