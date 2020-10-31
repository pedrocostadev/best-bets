import React from 'react';

import IconBall from '@/icons/IconBall';
import {
  BetItemDetail,
  GoalsDistinctionItem,
  GoalsDistinctionType,
} from '@/services/bets/types';
import { Team } from '@/services/fixtures/types';
import FlexContainer from '@/components//flexContainer/FlexContainer';
import Text from '@/components/text/Text';

import styles from './GoalsDistinctions.module.scss';

interface Props {
  team: Team;
  goalsDistinctions: BetItemDetail<GoalsDistinctionItem[]>;
}

const getSpecialPointStyle = (tag: GoalsDistinctionItem) => {
  if (tag.type === GoalsDistinctionType.GOOD) {
    return styles.goodTag;
  }
  return styles.badTag;
};

const GoalsDistinctions: React.FC<Props> = ({ team, goalsDistinctions }) => {
  const { value: tags } = goalsDistinctions;
  return (
    <>
      {tags.map((tag: GoalsDistinctionItem, index: number) => (
        <FlexContainer key={index} alignCenter columnGap>
          <>
            <IconBall />
            <Text
              className={getSpecialPointStyle(tag)}
              variant="body1"
              text={`${team.teamName} has ${tag.label} in league.`}
            />
          </>
        </FlexContainer>
      ))}
    </>
  );
};

export default React.memo(GoalsDistinctions);
