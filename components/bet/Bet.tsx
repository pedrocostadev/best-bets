import React from 'react';

import styles from './Bet.module.scss';
import { FixtureWithBets } from '../../types';
import betsApi from '../../services/bets';
import Text from '../text/Text';
import FlexContainer from '../flexContainer/FlexContainer';
interface Props {
  fixture: FixtureWithBets;
}

const Bet: React.FC<Props> = ({ fixture }: Props) => (
  <FlexContainer justifyCenter paddingTop paddingBottom>
    <Text
      bold
      textAlignCenter
      variant="body2"
      className={styles.bet}
      text={`BEST BET: ${betsApi.getBestBet(fixture)}`}
    />
  </FlexContainer>
);

export default React.memo(Bet);
