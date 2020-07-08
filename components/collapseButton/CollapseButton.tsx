import React from 'react';
import styles from './CollapseButton.module.css';
import IconChevron from '../../Icons/IconChevron';

interface Props {
  onClick(): void;
  isCollapsed: boolean;
}

const CollapseButton: React.FC<Props> = ({ onClick, isCollapsed }: Props) => (
  <button
    className={styles.collapseButton}
    onClick={onClick}
    aria-label="Collapse button"
  >
    <IconChevron
      className={`${styles.chevronIcon} ${
        isCollapsed ? styles.collapseChevronIcon : ''
      }`}
    />
  </button>
);

export default React.memo(CollapseButton);
