import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import MainHeader from '../MainHeader';




describe('MainHeader component tests', () => {

  it('MainHeader renders correctly', () => {
    const text = 'random text'
    const { container } = render(<MainHeader text={text} />)

    expect(container.querySelector('h1')).toBeDefined();
  });

  it('MainHeader renders text prop correctly', () => {
    const text = 'random text'
    const { container } = render(<MainHeader text={text} />)

    expect(container.querySelector('h1')?.innerHTML).toBe(text);
  });

});