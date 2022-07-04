import { useQuery, UseQueryResult } from 'react-query';
import { REST_API_BASE_URL, JOKE_BY_ID_PATH } from 'constants/restApiPaths';
import { REST_API_HEADERS } from 'constants/headers';
import { JokeByIdDto } from 'types/dtos/JokeByIdDto';

export type UseJokeById = {
  id: string;
  text: string;
};

export const useJokeById = (searchedText: string): UseQueryResult<UseJokeById> =>
  useQuery([`useJokesSearcher`, searchedText], async (): Promise<UseJokeById> => {
    if (!searchedText) {
      return { id: '', text: '' };
    }

    const jokeByIdResponse = await fetch(`${REST_API_BASE_URL}${JOKE_BY_ID_PATH}/${searchedText} `, REST_API_HEADERS);

    if (!jokeByIdResponse.ok) {
      await Promise.reject();
    }

    const jokeByIdDto: JokeByIdDto = await jokeByIdResponse.json();

    return {
      id: jokeByIdDto.id,
      text: jokeByIdDto.joke,
    };
  });
