import { StoryFn, Meta } from '@storybook/react';

import { Product } from '.';

export default {
  title: 'Molecules/Product',
  component: Product,
} as Meta;

export const Default: StoryFn = () => (
  <div
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <div style={{ width: 480 }}>
      <Product />
    </div>
  </div>
);
