import React from 'react';
import Image from 'next/image';

import { Team } from '@/services/fixtures/types';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import Heading from '@/components/heading/Heading';

import styles from './TeamWithLogo.module.scss';

interface Props {
  team: Team;
}

const TeamWithLogo: React.FC<Props> = ({ team }) => (
  <FlexContainer directionColumn alignCenter>
    <Image
      width={30}
      height={30}
      className={styles.logo}
      src={team.logo}
      alt={`${team.teamName} logo`}
    />
    <Heading variant="h3" text={team.teamName} />
  </FlexContainer>
);

export default React.memo(TeamWithLogo);
