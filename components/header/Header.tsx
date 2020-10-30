import React, { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';
import BurguerButton from '../burguerButton/BurguerButton';
import NavigationMenu from '../navigationMenu/NavigationMenu';
import Heading from '../heading/Heading';

interface State {
  showNavigationMenu: boolean;
}

const Header: React.FC = () => {
  const [state, setState] = useState<State>({ showNavigationMenu: false });
  const toggleNavigationMenu = () =>
    setState({ showNavigationMenu: !state.showNavigationMenu });
  const router = useRouter();
  const goToHomePage = () => router.push('/');
  //TODO: logo png to svg?
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={goToHomePage}>
        <img src="/pictures/boot.small.png" alt="boot picture" />
        <Heading variant="h1" text="Best Bets" />
        <Heading variant="h3" text="PL" />
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
