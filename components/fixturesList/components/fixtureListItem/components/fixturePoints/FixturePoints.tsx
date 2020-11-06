import React from 'react';
import classnames from 'classnames';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import Text from '@/components/text/Text';
import Points from '@/components/points/Points';

import { FixtureWithBets } from '../../../../../../types';
import styles from './FixturePoints.module.scss';

interface Props {
  fixture: FixtureWithBets;
}

const FixturePoints: React.FC<Props> = ({ fixture }: Props) => {
  const { homeTeamPoints, awayTeamPoints } = fixture;
  return (
    <FlexContainer paddingRight alignCenter>
      <Points
        className={classnames({
          [styles.bestBet]: homeTeamPoints > awayTeamPoints,
        })}
        points={homeTeamPoints}
      />
      <Text variant="caption" text="x" />
      <Points
        className={classnames({
          [styles.bestBet]: awayTeamPoints > homeTeamPoints,
        })}
        points={awayTeamPoints}
      />
    </FlexContainer>
  );
};

export default React.memo(FixturePoints);
