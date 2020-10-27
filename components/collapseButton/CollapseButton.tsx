import React from 'react';
import classnames from 'classnames';

import styles from './CollapseButton.module.scss';
import IconChevron from '../../Icons/IconChevron';
import Button from '../button/Button';

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
