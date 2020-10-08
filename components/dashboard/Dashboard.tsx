import React from 'react';
import IconSadFace from '../../Icons/IconSadFace';
import { FixtureWithBets } from '../../types';
import Fixture from '../fixture/Fixture';
import Message from '../message/Message';
import styles from './Dashboard.module.css';

interface Props {
  nextFixtures: FixtureWithBets[];
}

const Dashboard: React.FC<Props> = ({ nextFixtures }: Props) => (
  <main className={styles.mainContainer}>
    {nextFixtures.length === 0 && (
      <Message text="No games available" Icon={IconSadFace} />
    )}
    {nextFixtures.map((fixture: FixtureWithBets, i: number) => (
      <Fixture key={i} fixture={fixture} />
    ))}
  </main>
);

export default React.memo(Dashboard);
