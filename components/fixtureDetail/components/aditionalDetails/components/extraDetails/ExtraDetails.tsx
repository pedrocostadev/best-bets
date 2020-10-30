import React from 'react';

import IconBall from '../../../../../../Icons/IconBall';
import {
  BetItemDetail,
  SpecialPoint,
  SpecialPointTypes,
} from '../../../../../../services/bets/types';
import { Team } from '../../../../../../services/fixtures/types';
import FlexContainer from '../../../../../flexContainer/FlexContainer';
import Text from '../../../../../text/Text';
import styles from './ExtraDetails.module.scss';

interface Props {
  team: Team;
  extra: BetItemDetail;
}

const getSpecialPointStyle = (tag: SpecialPoint) => {
  if (tag.type === SpecialPointTypes.GOOD) {
    return styles.goodTag;
  }
  return styles.badTag;
};

const ExtraDetails: React.FC<Props> = ({ team, extra }) => {
  const tags = extra.value as SpecialPoint[];
  return (
    <>
      {tags.map((tag: SpecialPoint, index: number) => (
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

export default React.memo(ExtraDetails);
