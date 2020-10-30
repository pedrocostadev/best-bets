import React from 'react';
import classnames from 'classnames';

import styles from './FlexContainer.module.scss';

interface Props extends React.ComponentProps<'div'> {
  children: React.ReactElement;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  directionColumn?: boolean;
  padding?: boolean;
  paddingTop?: boolean;
  paddingRight?: boolean;
  paddingBottom?: boolean;
  paddingLeft?: boolean;
  columnGap?: boolean;
  rowGap?: boolean;
}

const FlexContainer: React.FC<Props> = ({
  children,
  className,
  alignCenter,
  justifyCenter,
  directionColumn,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  columnGap,
  rowGap,
  ...rest
}: Props) => {
  const classes = classnames(
    styles.flex,
    className,
    { [styles.alignCenter]: alignCenter },
    { [styles.justifyCenter]: justifyCenter },
    { [styles.directionColumn]: directionColumn },
    { [styles.padding]: padding },
    { [styles.paddingTop]: paddingTop },
    { [styles.paddingRight]: paddingRight },
    { [styles.paddingBottom]: paddingBottom },
    { [styles.paddingLeft]: paddingLeft },
    { [styles.columnGap]: columnGap },
    { [styles.rowGap]: rowGap },
  );
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export default FlexContainer;
