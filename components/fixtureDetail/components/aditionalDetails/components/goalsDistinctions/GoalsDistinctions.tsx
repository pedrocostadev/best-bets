import React from 'react';
import classnames from 'classnames';

import {
  BetItemDetail,
  GoalsDistinctionItem,
  GoalsDistinctionType,
} from '@/services/bets/types';
import { Team } from '@/services/fixtures/types';
import FlexContainer from '@/components//flexContainer/FlexContainer';
import Text from '@/components/text/Text';
import IconBall from '@/svgs/IconBall';

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
          <IconBall />
          <Text variant="body1">
            <>
              {`${team.teamName} has `}
              <Text
                variant="body1"
                as="span"
                text={tag.label}
                className={classnames(styles.tag, getSpecialPointStyle(tag))}
              />
              {' in league.'}
            </>
          </Text>
        </FlexContainer>
      ))}
    </>
  );
};

export default React.memo(GoalsDistinctions);
