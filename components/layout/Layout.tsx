import React, { useState } from 'react';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Main from '@/components/main/Main';
import NavigationMenu from '@/components/navigationMenu/NavigationMenu';
import BurguerButton from '@/components/burguerButton/BurguerButton';
import Backdrop from '@/components/backdrop/Backdrop';

import useBackdrop from '@/hooks/useBackdrop';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  const [showNavigationMenu, setShowNavigationMenu] = useState<boolean>(false);
  const { toggleBackdrop } = useBackdrop();

  const toggleNavigationMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleBackdrop();
    setShowNavigationMenu((currentState) => !currentState);
  };

  const ref: React.MutableRefObject<HTMLDivElement> = useOnClickOutside({
    onClickOutside: (e) => {
      if (!showNavigationMenu) {
        return;
      }
      toggleNavigationMenu(e);
    },
  });

  return (
    <>
      <NavigationMenu
        onClose={toggleNavigationMenu}
        show={showNavigationMenu}
      />
      <Backdrop />
      <div ref={ref}>
        <Header>
          <BurguerButton onClick={toggleNavigationMenu} />
        </Header>
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
