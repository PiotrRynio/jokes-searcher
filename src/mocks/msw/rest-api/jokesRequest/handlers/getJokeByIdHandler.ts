import { rest } from 'msw';
import { JOKE_BY_ID_PATH, REST_API_BASE_URL } from 'constants/restApiPaths';
import { searchJokesResponse } from '../responses/searchJokesResponse';

export const getJokeByIdHandler = rest.get(`${REST_API_BASE_URL}${JOKE_BY_ID_PATH}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(searchJokesResponse));
});
