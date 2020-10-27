import React from 'react';
import classnames from 'classnames';

import styles from './Text.module.scss';

interface Props {
  children: React.ReactElement;
  small?: boolean;
}

const Text: React.FC<Props> = ({ children, small }) => (
  <p className={classnames(styles.text, { [styles.small]: small })}>
    {children}
  </p>
);

export default React.memo(Text);
