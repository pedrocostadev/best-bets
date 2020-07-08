import React from 'react';
import Link from 'next/link';

import styles from './NavigationMenu.module.css';
import IconClose from '../../Icons/IconClose';

interface Props {
  onClose(): void;
  show: boolean;
}

interface ListLinkProps {
  name: string;
  path: string;
}

const ListLink: React.FC<ListLinkProps> = ({ name, path }: ListLinkProps) => (
  <li className={styles.linkContainer}>
    <Link href={path}>
      <a className={styles.link}>{name}</a>
    </Link>
  </li>
);

const NavigationMenu: React.FC<Props> = ({ onClose, show }) => (
  <>
    <div className={`${styles.mobileContainer} ${show ? '' : styles.hide}`}>
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close navigation menu"
      >
        <IconClose />
      </button>
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
