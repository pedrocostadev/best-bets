import React from 'react';

import { FixtureWithBets } from '../../types';
import Reputation from './components/reputation/Reputation';
import Rank from './components/rank/Rank';
import Shape from './components/shape/Shape';
import DetailItem from './components/detailItem/DetailItem';
import AditionalDetails from './components/aditionalDetails/AditionalDetails';
import Points from './components/points/Points';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureDetail: React.FC<Props> = ({ fixture }) => {
  const {
    betDetails: { homeTeam, awayTeam },
  } = fixture;
  return (
    <>
      <DetailItem
        title="Rank"
        homeTeam={<Rank rank={homeTeam.standing} />}
        awayTeam={<Rank rank={awayTeam.standing} />}
      />

      <DetailItem
        title="Reputation"
        homeTeam={<Reputation reputation={homeTeam.reputation} />}
        awayTeam={<Reputation reputation={awayTeam.reputation} />}
      />

      <DetailItem
        title="Shape"
        homeTeam={<Shape shape={homeTeam.shape} />}
        awayTeam={<Shape shape={awayTeam.shape} />}
      />
      <DetailItem
        title="Points"
        homeTeam={<Points points={fixture.homeTeamPoints} />}
        awayTeam={<Points points={fixture.awayTeamPoints} />}
      />
      <AditionalDetails fixture={fixture} />
    </>
  );
};

export default React.memo(FixtureDetail);
