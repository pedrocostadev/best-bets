import React from 'react';
import styles from './SpecialTag.module.css';
import { SpecialPoint, SpecialPointTypes } from '../../types';

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
