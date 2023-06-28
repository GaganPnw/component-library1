import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './Card';

test('renders Card component', () => {
  render(<Card>This is a card</Card>);
  const cardElement = screen.getByText('This is a card');
  expect(cardElement).toBeInTheDocument();
});

test('renders Card component with custom style', () => {
  render(
    <Card backgroundColor="#f2f2f2" size="large" border font="Arial">
      This is a card with custom style
    </Card>
  );
  const cardElement = screen.getByText('This is a card with custom style');
  expect(cardElement).toHaveStyle(`
    background-color: #f2f2f2;
    width: 400px;
    border: 1px solid #ccc;
    font-family: Arial;
  `);
});

test('renders disabled Card component', () => {
  render(<Card enabled={false}>This is a disabled card</Card>);
  const cardElement = screen.getByText('This is a disabled card');
  expect(cardElement).toHaveStyle(`
    opacity: 0.5;
    cursor: not-allowed;
  `);
});
