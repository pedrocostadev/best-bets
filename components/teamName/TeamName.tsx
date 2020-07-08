import React from 'react';
import styles from './TeamName.module.css';
import { Team } from '../../types';

interface Props {
  team: Team;
  isBestBet: boolean;
}

const TeamName: React.FC<Props> = ({ team, isBestBet }: Props) => (
  <span className={styles.container}>
    <span
      className={`${styles.teamName} ${isBestBet ? styles.bestBet : ''}`}
    >{`${team.teamName}`}</span>
  </span>
);

export default React.memo(TeamName);
