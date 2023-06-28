import React from 'react';
import { render, screen } from '@testing-library/react';

import Img from './Img';

const imageUrl = 'https://staticg.sportskeeda.com/editor/2022/07/862b6-16570318900725-1920.jpg';
const altText = 'Example Image';

test('renders img component', () => {
  render(<Img imageUrl={imageUrl} altText={altText} />);
  const imgElement = screen.getByAltText(altText);
  expect(imgElement).toBeInTheDocument();
});

test('renders disabled img component', () => {
  render(<Img imageUrl={imageUrl} altText={altText} enabled={false} />);
  const imgElement = screen.getByAltText(altText);
  expect(imgElement).toHaveStyle('opacity: 0.5');
});

test('renders img component with custom size', () => {
  const width = '200px';
  const height = '150px';
  render(<Img imageUrl={imageUrl} altText={altText} width={width} height={height} />);
  const imgElement = screen.getByAltText(altText);
  expect(imgElement).toHaveStyle(`width: ${width}`);
  expect(imgElement).toHaveStyle(`height: ${height}`);
});

test('renders img component with border', () => {
  const border = '1px solid black';
  render(<Img imageUrl={imageUrl} altText={altText} border={border} />);
  const imgElement = screen.getByAltText(altText);
  expect(imgElement).toHaveStyle(`border: ${border}`);
});

test('renders img component with rotation', () => {
  const rotation = '45deg';
  render(<Img imageUrl={imageUrl} altText={altText} rotation={rotation} />);
  const imgElement = screen.getByAltText(altText);
  expect(imgElement).toHaveStyle(`transform: rotate(${rotation})`);
});
