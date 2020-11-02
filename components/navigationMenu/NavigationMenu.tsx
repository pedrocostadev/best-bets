import React from 'react';

import Link, { LinkProps } from '@/components/link/Link';
import Button from '@/components/button/Button';

import styles from './NavigationMenu.module.scss';
import IconClose from '@/svgs/IconClose';

interface Props {
  onClose(): void;
  show: boolean;
}

const ListLink: React.FC<LinkProps> = (props: LinkProps) => (
  <li className={styles.linkContainer}>
    <Link {...props} className={styles.link} />
  </li>
);

const NavigationMenu: React.FC<Props> = ({ onClose, show }) => (
  <>
    <div className={`${styles.mobileContainer} ${show ? '' : styles.hide}`}>
      <Button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close navigation menu"
      >
        <IconClose />
      </Button>
      <ul className={styles.mobileLinksList}>
        <ListLink name="Home" path="/" />
        <ListLink name="About" path="/about" />
      </ul>
    </div>
    <div className={styles.desktopContainer}>
      <ul className={styles.desktopLinksList}>
        <ListLink name="Home" path="/" />
        <ListLink name="About" path="/about" />
      </ul>
    </div>
  </>
);

export default React.memo(NavigationMenu);
