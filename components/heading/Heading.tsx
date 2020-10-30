import React from 'react';
import classnames from 'classnames';

import styles from './Heading.module.scss';

interface Props {
  text: string;
  variant: 'h1' | 'h2' | 'h3';
}

const Heading: React.FC<Props> = ({ variant, text }) => {
  const HeadingTag = variant;
  return (
    <HeadingTag className={classnames(styles.heading, styles[variant])}>
      {text}
    </HeadingTag>
  );
};

export default React.memo(Heading);
