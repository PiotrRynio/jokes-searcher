import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APP_NAME } from 'constants/names';
import { JOKE_ID } from 'constants/urlParameters';
import { usePageTitle, useJokeById } from 'hooks';
import { Typography, Searcher, FetchingStatus } from 'components';
import { Wrapper } from './Home.styles';

export const Home = () => {
  const { setPageTitle } = usePageTitle();

  const [searchParams] = useSearchParams();
  const jokeId = searchParams.get(JOKE_ID) || '';

  const { data, isLoading, isError } = useJokeById(jokeId);
  const jokeText = data?.text || '';

  useEffect(() => {
    setPageTitle(`Searcher | ${APP_NAME}`);
  }, [setPageTitle]);

  return (
    <Wrapper>
      {isLoading || isError ? (
        <FetchingStatus status={isLoading ? 'loading' : 'error'} />
      ) : (
        <Typography variant="body1">{jokeText}</Typography>
      )}

      <Searcher />
    </Wrapper>
  );
};
