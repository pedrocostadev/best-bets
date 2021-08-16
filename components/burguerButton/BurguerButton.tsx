import React from 'react';

import Button from '@/components/button/Button';
import IconBurguer from '@/icons/IconBurguer';

import styles from './BurguerButton.module.scss';

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BurguerButton: React.FC<Props> = ({ onClick }: Props) => (
  <Button
    variant="icon"
    onClick={onClick}
    className={styles.burguerButton}
    aria-label="Menu button"
  >
    <IconBurguer />
  </Button>
);

export default React.memo(BurguerButton);
