import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

interface Props extends React.ComponentProps<'button'> {
  children: React.ReactElement;
}

const Button: React.FC<Props> = ({ children, className, ...rest }: Props) => (
  <button {...rest} className={classnames(styles.button, className)}>
    {children}
  </button>
);

export default React.memo(Button);
