import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '../';

afterEach(cleanup);

describe('Photo list is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('Matches snapshot', () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot()
  });
});