import React from 'react';

import IconGoldenBall from '../../../../../../Icons/IconGoldenBall';
import Text from '../../../../../text/Text';
import { BetItemDetail } from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';

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
          <Text key={`${name}_${year}}`}>
            <>
              <IconGoldenBall />
              {`${team.teamName} has ${name} in the team, one of the 3 FIFA best players of the world in ${year}.`}
            </>
          </Text>
        );
      })}
    </>
  );
};

export default React.memo(PlayersDetails);
