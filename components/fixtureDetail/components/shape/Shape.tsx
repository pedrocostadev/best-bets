import React from 'react';
import classnames from 'classnames';

import { BetItemDetail } from '../../../../services/bets/types';
import styles from './Shape.module.scss';
import Text from '../../../text/Text';

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

const Shape: React.FC<Props> = ({ shape }: Props) => (
  <div className={styles.container}>
    {(shape.value as string).split('').map((letter, i) => (
      <Text
        key={`${letter}_${i}`}
        className={classnames(styles.shape, styles[getClassName(letter)])}
        variant="body2"
        text={letter}
      />
    ))}
  </div>
);

export default React.memo(Shape);
