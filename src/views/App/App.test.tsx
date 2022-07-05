import { render, screen } from 'test-utils';
import { App } from './App';

describe(`<App>`, () => {
  it('renders correctly', async () => {
    // when
    render(<App />);

    // then
    expect(await screen.findByRole('heading', { name: /search jokes/i })).toBeVisible();
    expect(await screen.findByLabelText(/searcher/i)).toBeVisible();
  });
});
