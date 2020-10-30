import React from 'react';
import classnames from 'classnames';

import styles from './Text.module.scss';

type VARIANT = 'caption' | 'body2' | 'body1';

interface Props {
  as?: 'span' | 'p';
  className?: string;
  text: string;
  variant: VARIANT;
  ellipsis?: boolean;
  textAlignCenter?: boolean;
  bold?: boolean;
  uppercase?: boolean;
}

const Text: React.FC<Props> = ({
  text,
  variant,
  className,
  ellipsis,
  as,
  textAlignCenter,
  bold,
  uppercase,
}) => {
  const ElementTag = as ? as : 'p';
  return (
    <ElementTag
      className={classnames(styles.text, styles[variant], className, {
        [styles.ellipsis]: ellipsis,
        [styles.textAlignCenter]: textAlignCenter,
        [styles.bold]: bold,
        [styles.uppercase]: uppercase,
      })}
    >
      {text}
    </ElementTag>
  );
};

export default React.memo(Text);
