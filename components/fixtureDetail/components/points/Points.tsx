import React from 'react';

import styles from './Points.module.scss';

interface Props {
  points: number;
  className?: string;
}

const Points: React.FC<Props> = ({ points, className }: Props) => (
  <span className={`${className} ${styles.points}`}>{points * 1000}PTS</span>
);

export default React.memo(Points);
