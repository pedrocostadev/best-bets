import React from 'react';
import styles from './Main.module.css';

interface Props {
  children: React.ReactElement;
}

const Main: React.FC<Props> = ({ children }) => (
  <main className={styles.mainContainer}>
    <div className={styles.content}>{children}</div>
  </main>
);

export default React.memo(Main);
