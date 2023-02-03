import { render } from '@testing-library/react';

import { Product } from '.';

describe('<Product />', () => {
  it('should render the product correctly', () => {
    const { container } = render(<Product />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
