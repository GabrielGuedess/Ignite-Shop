import { render } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header correctly', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
