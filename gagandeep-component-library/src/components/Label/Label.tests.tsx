import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

test('renders Label component', () => {
  const { getByText } = render(<Label text="Test Label" />);
  const labelElement = getByText('Test Label');
  expect(labelElement).toBeInTheDocument();
});

test('renders disabled Label component', () => {
  const { getByText } = render(<Label text="Disabled Label" disabled />);
  const labelElement = getByText('Disabled Label');
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle('color: gray');
});

test('renders Label component with custom font size', () => {
  const { getByText } = render(<Label text="Custom Font Size" fontSize="20px" />);
  const labelElement = getByText('Custom Font Size');
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle('font-size: 20px');
});

test('renders Label component with custom background color', () => {
  const { getByText } = render(<Label text="Custom Background Color" backgroundColor="lightblue" />);
  const labelElement = getByText('Custom Background Color');
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle('background-color: lightblue');
});
