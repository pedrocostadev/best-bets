import React from 'react';
import { SpecialPoint, SpecialPointTypes } from '../../services/bets/types';
import styles from './SpecialTag.module.css';

interface Props {
  tag: SpecialPoint;
}

const SpecialTag: React.FC<Props> = ({ tag }: Props) => (
  <span
    className={`${styles.tag} ${
      tag.type === SpecialPointTypes.GOOD ? styles.goodTag : styles.badTag
    }`}
  >
    {tag.label}
  </span>
);

export default React.memo(SpecialTag);
