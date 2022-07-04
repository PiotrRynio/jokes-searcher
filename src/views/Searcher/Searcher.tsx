import { useEffect } from 'react';
import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';
import { Typography } from '../../components';

export const Searcher = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Searcher | ${APP_NAME}`);
  }, [setPageTitle]);

  return (
    <div>
      <Typography variant="body1">What did one wall say to the other wall? I'll meet you at the corner!</Typography>
    </div>
  );
};
