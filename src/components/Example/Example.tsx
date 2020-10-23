import React, { ReactElement } from 'react';

import styles from './Example.module.scss';
import { TExampleProps } from './Example.types';

function Example({ children }: TExampleProps): ReactElement {
  return (
    <div className={styles.container} data-testid="Example">
      {children}
    </div>
  );
}

export default Example;
