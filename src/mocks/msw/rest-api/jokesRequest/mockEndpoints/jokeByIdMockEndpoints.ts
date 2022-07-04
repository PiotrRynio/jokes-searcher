import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { JOKE_BY_ID_PATH, REST_API_BASE_URL } from 'constants/restApiPaths';
import { JokeByIdDto } from 'types/dtos/JokeByIdDto';

export const getJokeByIdWillReturn = (exampleResponse: JokeByIdDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${JOKE_BY_ID_PATH}/:joke_id`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getJokeByIdIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${JOKE_BY_ID_PATH}/:joke_id`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getJokeByIdWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${JOKE_BY_ID_PATH}/:joke_id`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
