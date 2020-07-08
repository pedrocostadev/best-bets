import React from 'react';
import IconBurguer from '../../Icons/IconBurguer';
import styles from './BurguerButton.module.css';

interface Props {
  onClick(): void;
}

const BurguerButton: React.FC<Props> = ({ onClick }: Props) => (
  <button
    onClick={onClick}
    className={styles.burguerButton}
    aria-label="Menu button"
  >
    <IconBurguer />
  </button>
);

export default React.memo(BurguerButton);
