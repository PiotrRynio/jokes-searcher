import { renderHook } from 'test-utils';
import {
  getJokeByIdIsLoading,
  getJokeByIdWillReturn,
} from 'mocks/msw/rest-api/jokesRequest/mockEndpoints/jokeByIdMockEndpoints';
import { jokeByIdResponse } from '../../mocks/msw/rest-api/jokesRequest/responses/jokeByIdResponse';
import { UseJokeById, useJokeById } from './useJokeById';

describe('Hook useJokeById', () => {
  const searchedText = 'dad';

  it(`should render hook`, async () => {
    // given
    getJokeByIdWillReturn(jokeByIdResponse);

    // when
    renderHook(() => useJokeById(searchedText));
  });

  it(`should start loading, if you call hook`, async () => {
    // given
    getJokeByIdIsLoading();

    // when
    const { result } = renderHook(() => useJokeById(searchedText));

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('should be fetching data wih success, if you call hook', async () => {
    // given
    getJokeByIdWillReturn(jokeByIdResponse);

    // when
    const { result, waitFor } = await renderHook(() => useJokeById(searchedText));
    await waitFor(() => result.current.isSuccess);

    // then
    const { error, isLoading, isLoadingError, isSuccess } = result.current;
    expect(isLoading).toBe(false);
    expect(isLoadingError).toBe(false);
    expect(error).toBe(null);
    expect(isSuccess).toBe(true);
    expect(result.current.isSuccess).toBe(true);
  });

  test('should return correct data, if it finish with success', async () => {
    // given
    getJokeByIdWillReturn(jokeByIdResponse);
    const { result, waitFor } = await renderHook(() => useJokeById(searchedText));

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    const { id, text } = result.current.data as UseJokeById;
    expect(id).toBe('BAdU0DAlVvc');
    expect(text).toBe('What do you call a dad that has fallen through the ice? A Popsicle.');
  });
});
