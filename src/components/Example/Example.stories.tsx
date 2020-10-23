import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Example from './Example';
import { TExampleProps } from './Example.types';

export default {
  title: 'Components/Example',
  component: Example,
} as Meta;

const Template: Story<TExampleProps> = (args) => <Example {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Sample Text',
};
