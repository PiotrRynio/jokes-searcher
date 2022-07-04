import { useEffect } from 'react';
import { usePageTitle } from 'hooks';
import { Link, Typography } from 'components';
import { APP_NAME } from 'constants/names';
import { Wrapper } from './NotFound.styles';

export const NotFound = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Not Found | ${APP_NAME}`);
  }, [setPageTitle]);

  return (
    <Wrapper>
      <Typography variant="title">PAGE NOT FOUND</Typography>

      <Typography variant="body1">
        <Link to="/">Go to home pages! </Link>
      </Typography>
    </Wrapper>
  );
};
