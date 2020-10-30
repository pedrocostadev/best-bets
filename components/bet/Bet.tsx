import React from 'react';

import betsApi from '@/services/bets';
import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';

import styles from './Bet.module.scss';
import { FixtureWithBets } from '../../types';

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
