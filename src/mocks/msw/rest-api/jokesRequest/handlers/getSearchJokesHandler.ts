import { rest } from 'msw';
import { REST_API_BASE_URL, SEARCH_JOKES_PATH } from 'constants/restApiPaths';
import { searchJokesResponse } from '../responses/searchJokesResponse';

export const getSearchJokesHandler = rest.get(`${REST_API_BASE_URL}${SEARCH_JOKES_PATH}`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(searchJokesResponse));
});
