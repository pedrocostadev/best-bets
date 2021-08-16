import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Heading from '@/components/heading/Heading';

import styles from './Header.module.scss';

interface Props {
  children: React.ReactElement;
}

const Header: React.FC<Props> = ({ children }) => {
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
      {children}
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
