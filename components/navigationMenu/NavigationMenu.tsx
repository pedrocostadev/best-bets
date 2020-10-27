import React from 'react';

import styles from './NavigationMenu.module.css';
import IconClose from '../../Icons/IconClose';
import Link, { LinkProps } from '../link/Link';
import Button from '../button/Button';

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
