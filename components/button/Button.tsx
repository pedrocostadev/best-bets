import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

interface Props extends React.ComponentProps<'button'> {
  children: React.ReactElement;
  variant?: 'contained' | 'outlined';
}

const Button: React.FC<Props> = ({
  children,
  className,
  variant,
  ...rest
}: Props) => (
  <button
    {...rest}
    className={classnames(styles.button, className, styles[variant])}
  >
    {children}
  </button>
);

export default React.memo(Button);
