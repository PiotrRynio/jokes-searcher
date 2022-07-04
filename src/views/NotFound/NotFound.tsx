import { useEffect } from 'react';
import { usePageTitle } from 'hooks';
import { Link, Typography } from 'components';
import { APP_NAME } from 'constants/names';

export const NotFound = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Not Found | ${APP_NAME}`);
  }, [setPageTitle]);

  return (
    <div>
      <Typography variant="subtitle" isSecondaryColor>
        PAGE NOT FOUND
      </Typography>
      <Link to="/">
        <Typography variant="itemTitle">Go to home pages!</Typography>
      </Link>
    </div>
  );
};
