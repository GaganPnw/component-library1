import React from 'react';
import { Story, Meta } from '@storybook/react';

import Img, { ImgProps } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg',
  altText: 'Example Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg',
  altText: 'Example Image',
  enabled: false,
};

export const WithCustomSize = Template.bind({});
WithCustomSize.args = {
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg',
  altText: 'Example Image',
  width: '200px',
  height: '150px',
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg',
  altText: 'Example Image',
  border: '1px solid black',
};

export const WithRotation = Template.bind({});
WithRotation.args = {
  imageUrl: 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg',
  altText: 'Example Image',
  rotation: '45deg',
};
