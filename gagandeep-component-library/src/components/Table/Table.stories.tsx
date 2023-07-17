import React from 'react';
import { Meta, Story } from '@storybook/react';

import Table, { TableProps } from './Table';

export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'City'],
  data: [
    { Name: 'John Doe', Age: 25, City: 'New York' },
    { Name: 'Jane Smith', Age: 30, City: 'Los Angeles' },
    { Name: 'Mike Johnson', Age: 35, City: 'Chicago' },
  ],
  fontSize: '16px',
  fontColor: '#000',
  disabled: false,
  backgroundColor: '#fff',
};
