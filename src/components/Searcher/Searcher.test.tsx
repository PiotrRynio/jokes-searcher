import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from 'test-utils';
import {
  getSearchJokesIsLoading,
  getSearchJokesWillReturn,
} from 'mocks/msw/rest-api/jokesRequest/mockEndpoints/searchJokesMockEndpoints';
import { searchJokesResponse } from 'mocks/msw/rest-api/jokesRequest/responses/searchJokesResponse';
import { Searcher } from './Searcher';

describe('<Searcher>', () => {
  it('renders correctly', async () => {
    // when
    render(<Searcher />);

    // then
    expect(await screen.findByLabelText(/searcher/i)).toBeVisible();
    expect(await screen.findByLabelText(/hidden results/i)).toBeVisible();
  });

  it(`shows loading icon, if you searching`, async () => {
    // given
    getSearchJokesIsLoading();
    const user = userEvent.setup();
    render(<Searcher />);
    const searcher = await screen.findByLabelText(/searcher/i);

    // when
    await user.type(searcher, 'dad');

    // then
    expect(searcher).toHaveValue('dad');
    expect(await screen.findByLabelText(/fetching/i)).toBeVisible();
  });

  it(`shows items, if you search 'dad' and loading status disappear`, async () => {
    // given
    getSearchJokesWillReturn(searchJokesResponse);
    const user = userEvent.setup();
    render(<Searcher />);
    const searcher = await screen.findByLabelText(/searcher/i);

    const expectedJokes = [
      /Dad died because he couldn't remember his blood type./i,
      /"I'll call you later." Don't call me later,/i,
      /A man is washing the car with his son./i,
      /Dad, I'm cold./i,
      /Dad I’m hungry’ … ‘Hi hungry I’m dad/i,
      /Child: Dad, make me a sandwich./i,
      /At the boxing match,/i,
    ];

    // when
    await user.type(searcher, 'dad');
    await screen.findByLabelText(/fetching/i);
    await waitFor(() => screen.findByLabelText(/shown results/i));

    // then

    expect(await screen.findByLabelText(expectedJokes[0])).toBeVisible();
    expect(await screen.findByLabelText(expectedJokes[1])).toBeVisible();
    expect(await screen.findByLabelText(expectedJokes[2])).toBeVisible();
    expect(await screen.findByLabelText(expectedJokes[3])).toBeVisible();
    expect(await screen.findByLabelText(expectedJokes[4])).toBeVisible();
  });
});
