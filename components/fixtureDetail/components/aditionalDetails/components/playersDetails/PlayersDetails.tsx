import React from 'react';

import IconGoldenBall from '../../../../../../Icons/IconGoldenBall';
import { BetItemDetail } from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';
import styles from './PlayerDetails.module.scss';

interface Props {
  team: Team;
  bestPlayers: BetItemDetail;
}

const PlayersDetails: React.FC<Props> = ({ team, bestPlayers }) => {
  const playersWithYear = bestPlayers.value as string[][];
  return (
    <>
      {playersWithYear.map((playerWithYear: string[]) => {
        const [name, year] = playerWithYear;
        return (
          <p key={`${name}_${year}}`} className={styles.container}>
            <IconGoldenBall className={styles.icon} />
            {`${team.teamName} has ${name} in the team, one of the 3 FIFA best players of the world in ${year}.`}
          </p>
        );
      })}
    </>
  );
};

export default React.memo(PlayersDetails);
