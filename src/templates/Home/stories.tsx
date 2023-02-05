import { StoryFn, Meta } from '@storybook/react';

import { Home, HomeProps } from '.';
import { mockHome } from './mock';

export default {
  title: 'Templates/Home',
  component: Home,
  args: mockHome,
} as Meta<HomeProps>;

export const Default: StoryFn<HomeProps> = args => <Home {...args} />;
