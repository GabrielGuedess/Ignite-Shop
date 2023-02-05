import { render } from '@testing-library/react';

import { Home } from '.';
import { mockHome } from './mock';

describe('<Home />', () => {
  it('should render the home correctly', () => {
    const { container } = render(<Home products={mockHome.products} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
