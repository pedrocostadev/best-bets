import React from 'react';
import classnames from 'classnames';

import Link, { LinkProps } from '@/components/link/Link';
import Button from '@/components/button/Button';

import styles from './NavigationMenu.module.scss';
import IconClose from '@/icons/IconClose';

interface Props {
  onClose(): void;
  show: boolean;
}

const ListLink: React.FC<LinkProps> = (props: LinkProps) => (
  <li className={styles.linkContainer}>
    <Link {...props} className={styles.link} />
  </li>
);

const NavigationMenu: React.FC<Props> = ({ onClose, show }) => {
  const ListLinkClick = (props) => <ListLink {...props} onClick={onClose} />;
  return (
    <>
      <div
        className={classnames(styles.mobileContainer, {
          [styles.hide]: !show,
        })}
      >
        <Button
          variant="icon"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <IconClose />
        </Button>
        <ul className={styles.mobileLinksList}>
          <ListLinkClick name="Home" path="/" />
          <ListLinkClick name="About" path="/about" />
        </ul>
      </div>
      <div className={styles.desktopContainer}>
        <ul className={styles.desktopLinksList}>
          <ListLinkClick name="Home" path="/" />
          <ListLinkClick name="About" path="/about" />
        </ul>
      </div>
    </>
  );
};

export default React.memo(NavigationMenu);
