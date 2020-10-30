import React from 'react';

import styles from './TeamWithLogo.module.scss';
import { Team } from '../../../../services/fixtures/types';
import FlexContainer from '../../../flexContainer/FlexContainer';
import Heading from '../../../heading/Heading';

interface Props {
  team: Team;
}

const TeamWithLogo: React.FC<Props> = ({ team }) => (
  <FlexContainer directionColumn alignCenter>
    <>
      <img
        className={styles.logo}
        src={team.logo}
        alt={`${team.teamName} logo`}
      />
      <Heading variant="h3" text={team.teamName} />
    </>
  </FlexContainer>
);

export default React.memo(TeamWithLogo);
