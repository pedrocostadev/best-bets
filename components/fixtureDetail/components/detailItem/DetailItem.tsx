import React from 'react';

import styles from './DetailItem.module.scss';
import Text from '../../../text/Text';

interface ItemProps {
  homeTeam: React.ReactElement;
  title: string;
  awayTeam: React.ReactElement;
}

const DetailItem: React.FC<ItemProps> = ({ title, homeTeam, awayTeam }) => (
  <div className={styles.container}>
    {homeTeam}
    <Text variant="caption" text={title} />
    {awayTeam}
  </div>
);

export default DetailItem;
