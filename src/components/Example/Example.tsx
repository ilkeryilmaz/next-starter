import React, { ReactElement } from 'react';

import styles from './Example.module.scss';

function Example(): ReactElement {
  return (
    <div className={styles.container} data-testid="Example">
      Example Component
    </div>
  );
}

export default Example;
