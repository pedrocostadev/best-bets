import React, { useState } from 'react';

import BackdropContext, { Backdrop } from './BackdropContext';

const useBackdropProvider = (): Backdrop => {
  const [showBackdrop, setShowbackdrop] = useState<boolean>(false);

  return {
    showBackdrop,
    setShowbackdrop,
    toggleBackdrop: () => setShowbackdrop((current) => !current),
  };
};

interface Props {
  children: React.ReactNode;
}

const BackdropProvider = ({ children }: Props): React.ReactElement => {
  const backdropUtils = useBackdropProvider();
  return (
    <BackdropContext.Provider value={backdropUtils}>
      {children}
    </BackdropContext.Provider>
  );
};

export default BackdropProvider;
