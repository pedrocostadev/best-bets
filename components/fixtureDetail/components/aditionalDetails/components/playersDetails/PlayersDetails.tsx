import React from 'react';

import IconGoldenBall from '../../../../../../Icons/IconGoldenBall';
import Text from '../../../../../text/Text';
import { BetItemDetail } from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';
import FlexContainer from '../../../../../flexContainer/FlexContainer';

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
          <FlexContainer key={`${name}_${year}}`} columnGap>
            <>
              <IconGoldenBall />
              <Text
                variant="body1"
                text={`${team.teamName} has ${name} in the team, one of the 3 FIFA best players of the world in ${year}.`}
              />
            </>
          </FlexContainer>
        );
      })}
    </>
  );
};

export default React.memo(PlayersDetails);
