import React from 'react';

import styles from './Points.module.scss';
import Text from '../../../text/Text';

interface Props {
  points: number;
}

const getFormattedPoints = (points: number) => points * 1000;

const Points: React.FC<Props> = ({ points }: Props) => (
  <Text
    variant="body2"
    className={styles.points}
    text={`${getFormattedPoints(points)} PTS`}
  />
);

export default React.memo(Points);
