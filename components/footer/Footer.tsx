import React from 'react';

import Text from '@/components/text/Text';

import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Text
      variant="caption"
      text="Copyright © 2020 Best Bets. All rights reserved."
    />
  </footer>
);

export default React.memo(Footer);
