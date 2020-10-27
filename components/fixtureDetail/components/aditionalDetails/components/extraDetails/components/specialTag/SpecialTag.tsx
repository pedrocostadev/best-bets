import React from 'react';
import classnames from 'classnames';

import {
  SpecialPoint,
  SpecialPointTypes,
} from '../../../../../../../../services/bets/types';
import styles from './SpecialTag.module.scss';

interface Props {
  tag: SpecialPoint;
}

const SpecialTag: React.FC<Props> = ({ tag }: Props) => (
  <span
    className={classnames(
      styles.tag,
      { [styles.goodTag]: tag.type === SpecialPointTypes.GOOD },
      { [styles.badTag]: tag.type === SpecialPointTypes.BAD },
    )}
  >
    {tag.label}
  </span>
);

export default React.memo(SpecialTag);
