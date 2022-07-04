import { Typography } from '../Typography';
import { Wrapper } from './FetchingStatus.styles';

export type FetchingStatusProps = {
  status: 'error' | 'loading' | 'noResults';
};

export const FetchingStatus = ({ status }: FetchingStatusProps) => {
  if (status === 'error') {
    return (
      <Wrapper role="status">
        <Typography variant="body1">Api error... Try again!</Typography>
      </Wrapper>
    );
  }
  if (status === 'loading') {
    return (
      <Wrapper role="status">
        <Typography variant="body1">Loading...</Typography>
      </Wrapper>
    );
  }
  return null;
};
