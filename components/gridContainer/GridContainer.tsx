import React from 'react';
import classnames from 'classnames';

import styles from './GridContainer.module.scss';

interface Props extends React.ComponentProps<'div'> {
  children: React.ReactElement | React.ReactElement[];
}

const GridContainer: React.FC<Props> = ({
  children,
  className,
  ...rest
}: Props) => {
  const classes = classnames(
    styles.grid,
    className,
    //{ [styles.rowGap]: rowGap },
  );
  return (
    <div {...rest} className={classes}>
      {React.Children.toArray(children)}
    </div>
  );
};

export default GridContainer;
