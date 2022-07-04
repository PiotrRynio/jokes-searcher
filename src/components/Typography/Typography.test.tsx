import { render, screen } from 'test-utils';
import { Typography } from './Typography';

describe(`<Typography>`, () => {
  const exampleText = 'Example text';

  it('renders body1 typography correctly', () => {
    // when
    render(<Typography variant="body1">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });

  it('renders body2 typography correctly', () => {
    // when
    render(<Typography variant="body2">{exampleText}</Typography>);

    // then
    screen.getByText(/Example text/i);
  });

  it('renders Title typography correctly', () => {
    // when
    render(<Typography variant="title">{exampleText}</Typography>);

    // then
    screen.getByRole('heading', { name: /Example text/i, level: 2 });
  });
});
