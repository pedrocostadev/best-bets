import React from 'react';
import classnames from 'classnames';
import useBackdrop from '@/hooks/useBackdrop';

import styles from './Backdrop.module.scss';

const Backdrop: React.FC = () => {
  const { showBackdrop } = useBackdrop();

  return (
    <div
      className={classnames(styles.backdrop, { [styles.show]: showBackdrop })}
    ></div>
  );
};

export default React.memo(Backdrop);
