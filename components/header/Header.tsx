import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import BurguerButton from '@/components/burguerButton/BurguerButton';
import NavigationMenu from '@/components/navigationMenu/NavigationMenu';
import Heading from '@/components/heading/Heading';

import styles from './Header.module.scss';

interface State {
  showNavigationMenu: boolean;
}

const Header: React.FC = () => {
  const [state, setState] = useState<State>({ showNavigationMenu: false });
  const toggleNavigationMenu = () =>
    setState({ showNavigationMenu: !state.showNavigationMenu });
  const router = useRouter();
  const goToHomePage = () => router.push('/');
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={goToHomePage}>
        <Image
          width={55}
          height={30}
          src="/pictures/boot.small.png"
          alt="boot picture"
        />
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
