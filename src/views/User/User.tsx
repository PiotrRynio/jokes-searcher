import { useEffect } from 'react';
import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';

export const User = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`User | ${APP_NAME}`);
  }, [setPageTitle]);

  return <div>User</div>;
};
