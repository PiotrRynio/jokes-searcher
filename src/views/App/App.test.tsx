import { render, screen } from 'test-utils';
import { App } from './App';

describe(`<App>`, () => {
  it('renders correctly', async () => {
    // when
    render(<App />);

    // then
    screen.getByRole('img', { name: /github logo/i });
  });
});
