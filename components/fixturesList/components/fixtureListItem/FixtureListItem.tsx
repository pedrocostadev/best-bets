import React from 'react';
import { useRouter } from 'next/router';

import { FixtureWithBets } from '../../../../types';
import styles from './FixtureListItem.module.scss';
import FixtureInfo from '../fixtureInfo/FixtureInfo';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureListItem: React.FC<Props> = ({ fixture }: Props) => {
  const router = useRouter();
  const goToFixtureDetailPage = () =>
    router.push(`/fixture/${fixture.fixtureId}`);
  return (
    <div className={styles.container} onClick={goToFixtureDetailPage}>
      <FixtureInfo fixture={fixture} />
    </div>
  );
};

export default FixtureListItem;
