import React from 'react';

import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span>Copyright © 2020 Best Bets. All rights reserved.</span>
  </footer>
);

export default React.memo(Footer);
