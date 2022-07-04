import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, SEARCH_JOKES_PATH } from 'constants/restApiPaths';
import { SearchJokesDto } from 'types';

export const getSearchJokesWillReturn = (exampleResponse: SearchJokesDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_JOKES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getSearchJokesIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_JOKES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getSearchJokesWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_JOKES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
