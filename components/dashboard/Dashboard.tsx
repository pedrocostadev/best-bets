import React from 'react';
import { FixtureWithBets } from '../../types';
import Fixture from '../fixture/Fixture';
import styles from './Dashboard.module.css';

interface Props {
  nextFixtures: FixtureWithBets[];
}

const Dashboard: React.FC<Props> = ({ nextFixtures }: Props) => (
  <main className={styles.mainContainer}>
    {nextFixtures.map((fixture: FixtureWithBets, i: number) => (
      <Fixture key={i} fixture={fixture} />
    ))}
  </main>
);

export default React.memo(Dashboard);
