import React from 'react';

import { BetItemDetail } from '../../../../services/bets/types';
import styles from './Shape.module.scss';

interface Props {
  shape: BetItemDetail;
  className?: string;
}

const getClassName = (letter: string) => {
  if (letter === 'W') {
    return 'victory';
  }
  if (letter === 'D') {
    return 'draw';
  }

  if (letter === 'L') {
    return 'lost';
  }
};

const Shape: React.FC<Props> = ({ shape, className }: Props) => (
  <span className={className}>
    {(shape.value as string).split('').map((letter, i) => (
      <span className={styles[getClassName(letter)]} key={i}>
        {letter}
      </span>
    ))}
  </span>
);

export default React.memo(Shape);
