import React from 'react';
import formatRelative from 'date-fns/formatRelative';

import Text from '@/components/text/Text';

import { FixtureInfo } from '../../types';

interface Props {
  fixtureInfo: FixtureInfo;
  textAlignCenter?: boolean;
}

const FixtureDate: React.FC<Props> = ({ fixtureInfo, ...restProps }: Props) => {
  const eventDate = new Date(fixtureInfo.fixture.eventDate);
  const today = new Date();
  const date = formatRelative(eventDate, today);
  return (
    <>
      <Text {...restProps} variant="body2" text={date} />
    </>
  );
};

export default React.memo(FixtureDate);
