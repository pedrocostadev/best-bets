import React from 'react';

import Text from '@/components/text/Text';
import Heading from '@/components/heading/Heading';
import FixtureDate from '@/components/fixtureDate/FixtureDate';

import { FixtureInfo, StatsByPlace } from '../../types';
import Reputation from './components/reputation/Reputation';
import Rank from './components/rank/Rank';
import Shape from './components/shape/Shape';
import SideBySideItem from './components/sideBySideItem/SideBySideItem';
import AditionalDetails from './components/aditionalDetails/AditionalDetails';
import Points from '../points/Points';

const getGoalsFor = (team: StatsByPlace) =>
  team.home.goalsFor + team.away.goalsFor;

const getGoalsAgainst = (team: StatsByPlace) =>
  team.home.goalsAgainst + team.away.goalsAgainst;

interface Props {
  fixtureInfo: FixtureInfo;
}

const FixtureDetail: React.FC<Props> = ({ fixtureInfo }) => {
  const {
    bet: { homeTeam, awayTeam },
    stats,
  } = fixtureInfo;
  return (
    <>
      <SideBySideItem
        extraBottomPadding
        title=""
        homeTeam={<Points variant="big" points={homeTeam.points} />}
        awayTeam={<Points variant="big" points={awayTeam.points} />}
      />
      <Text textAlignCenter variant="body2" text={fixtureInfo.fixture.venue} />
      <FixtureDate textAlignCenter fixtureInfo={fixtureInfo} />
      <Heading variant="h3" text="Side by Side" />
      <SideBySideItem
        title="Rank"
        homeTeam={<Rank rank={homeTeam.detail.standing} />}
        awayTeam={<Rank rank={awayTeam.detail.standing} />}
      />

      <SideBySideItem
        title="Reputation"
        homeTeam={<Reputation reputation={homeTeam.detail.reputation} />}
        awayTeam={<Reputation reputation={awayTeam.detail.reputation} />}
      />
      <SideBySideItem
        title="Shape"
        homeTeam={<Shape shape={homeTeam.detail.shape} />}
        awayTeam={<Shape shape={awayTeam.detail.shape} />}
      />
      <SideBySideItem
        title="Goals Scored"
        homeTeam={<Text variant="body2" text={getGoalsFor(stats.homeTeam)} />}
        awayTeam={<Text variant="body2" text={getGoalsFor(stats.awayTeam)} />}
      />
      <SideBySideItem
        title="Goals Conceded"
        homeTeam={
          <Text variant="body2" text={getGoalsAgainst(stats.homeTeam)} />
        }
        awayTeam={
          <Text variant="body2" text={getGoalsAgainst(stats.awayTeam)} />
        }
      />
      <AditionalDetails fixtureInfo={fixtureInfo} />
    </>
  );
};

export default React.memo(FixtureDetail);
