import React from 'react';

import IconBurguer from '@/icons/IconBurguer';
import Button from '@/components/button/Button';

import styles from './BurguerButton.module.scss';

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
