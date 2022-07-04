import { useQuery, UseQueryResult } from 'react-query';
import { REST_API_BASE_URL, SEARCH_JOKES_PATH } from 'constants/restApiPaths';
import { REST_API_HEADERS } from 'constants/headers';
import { SearchJokesDto } from 'types';

export type Joke = {
  id: string;
  text: string;
};

export type UseJokesSearcher = {
  searchedJokes: Joke[];
};

export const useJokesSearcher = (searchedText?: string): UseQueryResult<UseJokesSearcher> =>
  useQuery([`useJokesSearcher`, searchedText], async (): Promise<UseJokesSearcher> => {
    if (!searchedText || searchedText.length < 3) {
      return { searchedJokes: [] };
    }

    const searchedJokesPagesNumber = await fetch(
      `${REST_API_BASE_URL}${SEARCH_JOKES_PATH}?term=${searchedText}&limit=30`,
      REST_API_HEADERS,
    )
      .then((response) => response.json())
      .then((searchJokesDto: SearchJokesDto) => searchJokesDto.total_pages);

    // TODO: If we want to fetch less data, we could use use the response above to avoid fetching the first page again

    const allSearchedJokesPages: SearchJokesDto[] = await Promise.all(
      Array.from({ length: searchedJokesPagesNumber }, (_, index) =>
        fetch(
          `${REST_API_BASE_URL}${SEARCH_JOKES_PATH}?term=${searchedText}&page=${index + 1}&limit=30`,
          REST_API_HEADERS,
        ).then((response) => response.json()),
      ),
    );

    const allSearchedJokes: Joke[] = allSearchedJokesPages.reduce(
      (jokesAccumulator: Joke[], searchJokesDto: SearchJokesDto) => {
        const jokes: Joke[] = searchJokesDto.results.map((joke) => ({
          id: joke.id,
          text: joke.joke,
        }));
        return [...jokesAccumulator, ...jokes];
      },
      [],
    );

    return {
      searchedJokes: allSearchedJokes,
    };
  });
