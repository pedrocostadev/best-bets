import React from 'react';

import styles from './Message.module.css';

interface Props {
  text: string;
  Icon?: React.FC;
}

const Message: React.FC<Props> = ({ text, Icon }: Props) => (
  <p className={styles.message}>
    {Icon && <Icon />}
    {text}
  </p>
);

export default Message;
