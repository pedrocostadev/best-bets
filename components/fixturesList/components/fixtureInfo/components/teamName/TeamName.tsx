import React from 'react';
import classnames from 'classnames';

import { Team } from '../../../../../../services/fixtures/types';
import styles from './TeamName.module.css';

interface Props {
  team: Team;
  isBestBet: boolean;
}

const TeamName: React.FC<Props> = ({ team, isBestBet }: Props) => (
  <span className={styles.container}>
    <span
      className={classnames(styles.teamName, {
        [styles.bestBetTeamName]: isBestBet,
      })}
    >
      {`${team.teamName}`}
    </span>
  </span>
);

export default React.memo(TeamName);
