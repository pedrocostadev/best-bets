import React from 'react';

import styles from './DetailItem.module.css';

interface ItemProps {
  homeTeam: React.ReactElement;
  title: string;
  awayTeam: React.ReactElement;
}

const DetailItem: React.FC<ItemProps> = ({ title, homeTeam, awayTeam }) => (
  <p className={styles.container}>
    {homeTeam}
    <span className={styles.title}>{title}</span>
    {awayTeam}
  </p>
);

export default DetailItem;
