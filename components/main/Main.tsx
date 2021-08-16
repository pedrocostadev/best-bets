import React from 'react';

import styles from './Main.module.scss';

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default React.memo(Main);
