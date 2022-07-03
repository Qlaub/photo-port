import ContactForm from "..";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('Contact form is rendering', () => {

  it('renders', () => {
    render(<ContactForm />);
  });

  it('Matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot()
  });
});

describe('Elements display text', () => {
  it('Shows h1 text', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  it('Inserts text into button element', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
});