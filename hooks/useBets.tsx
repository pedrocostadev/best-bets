import React, { useContext } from 'react';

import { FixtureWithBets } from '../types';

interface Bets {
  fixtures: FixtureWithBets[];
}

const initialValue = {
  fixtures: [],
};

export const UseBetsContext = React.createContext<Bets>(initialValue);

const useBets = (): Bets => {
  const bets = useContext(UseBetsContext);
  return bets;
};

export default useBets;
