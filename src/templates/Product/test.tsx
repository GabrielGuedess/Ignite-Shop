import { render } from '@testing-library/react';

import { Product } from '.';

describe('<Product />', () => {
  it('should render the product correctly', () => {
    const { container } = render(
      <Product
        imageUrl="/"
        name="Camiseta X"
        price="R$ 7900"
        describe="Test"
        defaultPriceId="2"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
