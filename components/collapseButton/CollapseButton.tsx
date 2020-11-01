import React from 'react';
import classnames from 'classnames';

import Button from '@/components/button/Button';

import IconChevron from '../../icons/IconChevron';
import styles from './CollapseButton.module.scss';

interface Props {
  onClick(): void;
  isCollapsed: boolean;
}

const CollapseButton: React.FC<Props> = ({ onClick, isCollapsed }: Props) => (
  <Button
    className={styles.collapseButton}
    onClick={onClick}
    aria-label="Collapse button"
  >
    <IconChevron
      className={classnames(styles.chevronIcon, {
        [styles.collapseChevronIcon]: isCollapsed,
      })}
    />
  </Button>
);

export default React.memo(CollapseButton);
