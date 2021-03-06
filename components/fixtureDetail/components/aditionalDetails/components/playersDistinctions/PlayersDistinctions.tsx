import React from 'react';

import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import { BetItemDetail } from '@/services/bets/types';
import { Team } from '@/services/fixtures/types';
import IconGoldenBall from '@/icons/IconGoldenBall';

interface Props {
  team: Team;
  bestPlayers: BetItemDetail<string[][]>;
}

const PlayersDistinctions: React.FC<Props> = ({ team, bestPlayers }) => {
  const { value: playersWithYear } = bestPlayers;
  return (
    <>
      {playersWithYear.map((playerWithYear: string[]) => {
        const [name, year] = playerWithYear;
        return (
          <FlexContainer key={`${name}_${year}}`} columnGap>
            <IconGoldenBall />
            <Text
              variant="body2"
              text={`${team.teamName} has ${name} in the team, one of the 3 FIFA best players of the world in ${year}.`}
            />
          </FlexContainer>
        );
      })}
    </>
  );
};

export default React.memo(PlayersDistinctions);
