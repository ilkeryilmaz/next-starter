import { render } from 'react-dom';
import { configure } from '@storybook/react';

const loadStories = () => {
  const globalStyleElId = 'global-style';
  const globalStyleEl =
    document.querySelector(`#${globalStyleElId}`) ||
    (() => {
      const el = document.createElement('div');
      el.id = globalStyleElId;
      document.head.append(el);
      return el;
    })();

  render(globalStyleEl);
};

configure(loadStories, module);
