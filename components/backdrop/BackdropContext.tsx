import { createContext } from 'react';

export interface Backdrop {
  showBackdrop: boolean;
  setShowbackdrop: (show: boolean) => void;
  toggleBackdrop: () => void;
}

const BackdropContext = createContext<Backdrop>({
  showBackdrop: false,
  setShowbackdrop: null,
  toggleBackdrop: null,
});

export default BackdropContext;
