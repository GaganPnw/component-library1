import React from 'react';
import { Meta, Story } from '@storybook/react';

import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = args => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://design.gs.com/hero-intro.png',
  alt: 'Example Hero Image',
  text: 'Hero Image Text',
  backgroundColor: '#f2f2f2',
  disabled: false,
};
