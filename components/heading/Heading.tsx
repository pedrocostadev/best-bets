import React from 'react';

import styles from './Heading.module.scss';

interface Props {
  text: string;
  variant: 'title' | 'subtitle';
}

const Heading: React.FC<Props> = ({ variant, text }) => {
  const HeadingTag = variant === 'title' ? 'h2' : 'h3';
  return <HeadingTag className={styles[variant]}>{text}</HeadingTag>;
};

export default React.memo(Heading);
