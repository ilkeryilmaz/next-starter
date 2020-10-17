import React from 'react';
import { render } from '@testing-library/react';

import Example from './Example';

describe('Example', () => {
  it('renders the Example Component with default', () => {
    const { getByTestId } = render(<Example />);

    expect(getByTestId('Example')).toBeDefined();
  });
});
