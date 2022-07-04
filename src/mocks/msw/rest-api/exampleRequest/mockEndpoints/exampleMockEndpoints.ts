import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, EXAMPLES_PATH } from 'constants/restApiPaths';
import { ExampleDto } from 'types';

export const getExampleWillReturn = (exampleResponse: ExampleDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${EXAMPLES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getExampleIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${EXAMPLES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getExampleWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${EXAMPLES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
