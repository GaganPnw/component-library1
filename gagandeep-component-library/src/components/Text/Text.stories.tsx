import React from 'react';
import { Story, Meta } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Lorem ipsum dolor sit amet',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Lorem ipsum dolor sit amet',
  enabled: false,
};

export const WithCustomFontSize = Template.bind({});
WithCustomFontSize.args = {
  text: 'Lorem ipsum dolor sit amet',
  fontSize: '18px',
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  text: 'Lorem ipsum dolor sit amet',
  backgroundColor: 'lightblue',
};
