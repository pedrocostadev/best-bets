import React, { useState } from 'react';

import { FixtureWithBets } from '../../types';
import styles from './Fixture.module.css';
import FixtureDetail from '../fixtureDetail/FixtureDetail';
import CollapseButton from '../collapseButton/CollapseButton';
import FixtureInfo from '../fixtureInfo/FixtureInfo';

interface Props {
  fixture: FixtureWithBets;
}

interface State {
  isCollapsed: boolean;
}

const Fixture: React.FC<Props> = ({ fixture }: Props) => {
  const [state, setState] = useState<State>({ isCollapsed: false });
  const toggleCollapse = () => setState({ isCollapsed: !state.isCollapsed });
  return (
    <div className={styles.container}>
      <div className={styles.fixture}>
        <FixtureInfo fixture={fixture} />
        <CollapseButton
          onClick={toggleCollapse}
          isCollapsed={state.isCollapsed}
        />
      </div>
      <FixtureDetail isCollapsed={state.isCollapsed} fixture={fixture} />
    </div>
  );
};

export default Fixture;
