import React, { ReactElement } from 'react';
import classnames from 'classnames';

import styles from './Text.module.scss';

type VARIANT = 'caption' | 'body2' | 'body1';

interface TextProps {
  as?: 'span' | 'p';
  className?: string;
  text?: string | number;
  variant: VARIANT;
  ellipsis?: boolean;
  textAlignCenter?: boolean;
  bold?: boolean;
  uppercase?: boolean;
  children?: ReactElement | ReactElement[];
}

const Text: React.FC<TextProps> = ({
  text,
  variant,
  className,
  ellipsis,
  as,
  textAlignCenter,
  bold,
  uppercase,
  children,
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
      {React.Children.toArray(children)}
    </ElementTag>
  );
};

export default React.memo(Text);
