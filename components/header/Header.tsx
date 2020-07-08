import React, { useState } from 'react';
import styles from './Header.module.css';
import BurguerButton from '../burguerButton/BurguerButton';
import NavigationMenu from '../navigationMenu/NavigationMenu';

interface State {
  showNavigationMenu: boolean;
}

const Header: React.FC = () => {
  const [state, setState] = useState<State>({ showNavigationMenu: false });
  const toggleNavigationMenu = () =>
    setState({ showNavigationMenu: !state.showNavigationMenu });
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/pictures/boot.small.png" alt="boot picture" />
        <span>Best Bets</span>
        <span className={styles.pl}>PL</span>
      </div>
      <BurguerButton onClick={toggleNavigationMenu} />
      <NavigationMenu
        onClose={toggleNavigationMenu}
        show={state.showNavigationMenu}
      />
    </header>
  );
};

export default Header;
