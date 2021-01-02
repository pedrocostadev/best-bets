import React from 'react';
import classnames from 'classnames';

import FlexContainer from '@/components/flexContainer/FlexContainer';
import Text from '@/components/text/Text';
import Points from '@/components/points/Points';

import { FixtureInfo } from '../../../../../../types';
import styles from './FixturePoints.module.scss';

interface Props {
  fixtureInfo: FixtureInfo;
}

const getPointsStyle = (teamPoints: number, otherTeamPoints: number) => {
  if (teamPoints > otherTeamPoints) {
    return styles.green;
  }
  if (teamPoints < otherTeamPoints) {
    return styles.red;
  }
  return styles.yellow;
};

const FixturePoints: React.FC<Props> = ({ fixtureInfo }: Props) => {
  const {
    bet: { homeTeam, awayTeam },
  } = fixtureInfo;
  return (
    <FlexContainer paddingRight alignCenter>
      <Points
        className={classnames(
          styles.bet,
          getPointsStyle(homeTeam.points, awayTeam.points),
        )}
        points={homeTeam.points}
      />
      <Text variant="caption" text="x" />
      <Points
        className={classnames(
          styles.bet,
          getPointsStyle(awayTeam.points, homeTeam.points),
        )}
        points={awayTeam.points}
      />
    </FlexContainer>
  );
};

export default React.memo(FixturePoints);
