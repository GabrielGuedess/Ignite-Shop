import { render } from '@testing-library/react';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the container correctly', () => {
    const { container } = render(<Container />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
