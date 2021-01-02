import React from 'react';
import classnames from 'classnames';

import Text from '@/components/text/Text';

import styles from './DetailItem.module.scss';

interface ItemProps {
  homeTeam: React.ReactElement;
  title: string;
  awayTeam: React.ReactElement;
  extraBottomPadding?: boolean;
}

const DetailItem: React.FC<ItemProps> = ({
  title,
  homeTeam,
  awayTeam,
  extraBottomPadding,
}) => (
  <div
    className={classnames(styles.container, {
      [styles.extraBottomPadding]: extraBottomPadding,
    })}
  >
    {homeTeam}
    <Text variant="caption" text={title} textAlignCenter />
    {awayTeam}
  </div>
);

export default DetailItem;
