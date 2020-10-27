import React from 'react';

import styles from './styles.module.css';

const About: React.FC = () => (
  <>
    <p>
      BestBets is not responsible for your bets. The recommended bet is based on
      real data but can obviously fail.
    </p>
    <p>For now we only support Premier League games.</p>
    <p className={styles.playResponsibly}>
      <span>Play responsibly.</span>
    </p>
  </>
);

export default About;
