import React from 'react';

import Text from '@/components/text/Text';

import { FixtureInfo, StatsByPlace } from '../../types';
import Reputation from './components/reputation/Reputation';
import Rank from './components/rank/Rank';
import Shape from './components/shape/Shape';
import DetailItem from './components/detailItem/DetailItem';
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
      <DetailItem
        title="Rank"
        homeTeam={<Rank rank={homeTeam.detail.standing} />}
        awayTeam={<Rank rank={awayTeam.detail.standing} />}
      />

      <DetailItem
        title="Reputation"
        homeTeam={<Reputation reputation={homeTeam.detail.reputation} />}
        awayTeam={<Reputation reputation={awayTeam.detail.reputation} />}
      />
      <DetailItem
        title="Shape"
        homeTeam={<Shape shape={homeTeam.detail.shape} />}
        awayTeam={<Shape shape={awayTeam.detail.shape} />}
      />
      <DetailItem
        title="Goals Scored"
        homeTeam={<Text variant="body2" text={getGoalsFor(stats.homeTeam)} />}
        awayTeam={<Text variant="body2" text={getGoalsFor(stats.awayTeam)} />}
      />
      <DetailItem
        title="Goals Conceded"
        homeTeam={
          <Text variant="body2" text={getGoalsAgainst(stats.homeTeam)} />
        }
        awayTeam={
          <Text variant="body2" text={getGoalsAgainst(stats.awayTeam)} />
        }
      />
      <DetailItem
        title="Points"
        homeTeam={<Points points={homeTeam.points} />}
        awayTeam={<Points points={awayTeam.points} />}
      />
      <AditionalDetails fixtureInfo={fixtureInfo} />
    </>
  );
};

export default React.memo(FixtureDetail);
