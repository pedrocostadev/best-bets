import { useContext } from 'react';
import BackdropContext, {
  Backdrop,
} from '@/components/backdrop/BackdropContext';

const useBackdrop = (): Backdrop => {
  return useContext(BackdropContext);
};

export default useBackdrop;
