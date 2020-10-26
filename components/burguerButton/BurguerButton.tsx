import React from 'react';

import IconBurguer from '../../Icons/IconBurguer';
import Button from '../button/Button';
import styles from './BurguerButton.module.css';

interface Props {
  onClick(): void;
}

const BurguerButton: React.FC<Props> = ({ onClick }: Props) => (
  <Button
    onClick={onClick}
    className={styles.burguerButton}
    aria-label="Menu button"
  >
    <IconBurguer />
  </Button>
);

export default React.memo(BurguerButton);
