import { render } from '@testing-library/react';

import { Product } from '.';

describe('<Product />', () => {
  it('should render the product correctly', () => {
    const { container } = render(
      <Product
        id="1"
        imageUrl="https://d1wqzb5bdbcre6.cloudfront.net/d7e0f05b16a7dd5c6bda9d2b8023377c8d169c9d44fb684b9afea972f3bfa90f/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a6446387854566857527a46435a557853526e6c33616a427466475a735833526c633352664f4770614f47747a5a4539616257313457484635527a427855566c75646b707230307049447645725164"
        name="Camiseta X"
        price="R$ 80,00"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
