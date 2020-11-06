import React from 'react';
import classnames from 'classnames';

import Text from '@/components/text/Text';

import styles from './Points.module.scss';

interface Props {
  points: number;
  className?: string;
}

const getFormattedPoints = (points: number) => points * 1000;

const Points: React.FC<Props> = ({ points, className }: Props) => (
  <Text
    variant="body2"
    className={classnames(styles.points, className)}
    text={`${getFormattedPoints(points)} PTS`}
  />
);

export default React.memo(Points);
