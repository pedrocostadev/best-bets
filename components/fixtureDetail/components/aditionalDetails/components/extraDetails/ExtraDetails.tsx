import React from 'react';
import IconBall from '../../../../../../Icons/IconBall';

import {
  BetItemDetail,
  SpecialPoint,
} from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';
import SpecialTag from '../../../specialTag/SpecialTag';
import styles from './ExtraDetails.module.scss';

interface Props {
  team: Team;
  extra: BetItemDetail;
}

const ExtraDetails: React.FC<Props> = ({ team, extra }) => {
  const details = extra.value as SpecialPoint[];
  return (
    <>
      {details.map((detail: SpecialPoint, index: number) => (
        <p className={styles.container} key={index}>
          <IconBall className={styles.icon} />
          {`${team.teamName} has`}
          <SpecialTag tag={detail} />
          {'in league.'}
        </p>
      ))}
    </>
  );
};

export default React.memo(ExtraDetails);
