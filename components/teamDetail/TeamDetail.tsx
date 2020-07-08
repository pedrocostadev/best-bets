import React from 'react';
import styles from './TeamDetail.module.css';
import StarsRating from '../starsRating/StarsRating';
import Shape from '../shape/Shape';
import SpecialTag from '../specialTag/SpecialTag';
import { SpecialPoint, BetDetail, Team } from '../../types';

interface Props {
  title: string;
  team: Team;
  betDetails: BetDetail;
}

const TeamDetail: React.FC<Props> = ({ title, team, betDetails }) => (
  <section className={styles.container}>
    <div className={styles.teamTitleContainer}>
      <img
        className={styles.teamLogo}
        src={team.logo}
        alt={`${team.teamName} logo`}
      />
      <h4 className={styles.title}>{title}</h4>
    </div>
    <section className={styles.itemsContainer}>
      <p className={styles.detailItem}>
        <span>Rating: </span>
        <span className={styles.itemValue}>
          <StarsRating rating={betDetails.reputation.value as number} />
        </span>
      </p>
      <p className={styles.detailItem}>
        Rank:{' '}
        <span className={styles.itemValue}>{betDetails.standing.value}º</span>
      </p>
      <p className={styles.detailItem}>
        Shape:{' '}
        <span className={styles.itemValue}>
          <Shape shape={betDetails.shape.value as string} />
        </span>
      </p>
      <p className={`${styles.detailItem} ${styles.tagsContainer}`}>
        {(betDetails.extra.value as SpecialPoint[]).map((tag, i) => (
          <SpecialTag key={i} tag={tag} />
        ))}
      </p>
    </section>
  </section>
);

export default React.memo(TeamDetail);
