import React, { useContext } from 'react';

import { FixtureInfo } from '../types';

interface Bets {
  fixturesInfo: FixtureInfo[];
}

const initialValue = {
  fixturesInfo: [],
};

export const UseBetsContext = React.createContext<Bets>(initialValue);

const useBets = (): Bets => {
  const bets = useContext(UseBetsContext);
  return bets;
};

export default useBets;
