import React from 'react';
import { Meta, Story } from '@storybook/react';

import TableCell, { TableCellProps } from './TableCell';

export default {
  title: 'TableCell',
  component: TableCell,
} as Meta;

const Template: Story<TableCellProps> = args => <TableCell {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Cell Text',
  fontSize: '16px',
  fontColor: '#000',
  backgroundColor: '#fff',
  disabled: false,
};
