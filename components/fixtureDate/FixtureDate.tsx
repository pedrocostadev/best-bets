import React from 'react';
import { format, formatDistance } from 'date-fns';

import Text from '@/components/text/Text';

import { FixtureInfo } from '../../types';

interface Props {
  fixtureInfo: FixtureInfo;
  textAlignCenter?: boolean;
}

const FixtureDate: React.FC<Props> = ({ fixtureInfo, ...restProps }: Props) => {
  const eventDate = new Date(fixtureInfo.fixture.eventDate);
  const inXdays = formatDistance(eventDate, new Date());
  const date = `${format(eventDate, 'd/MM/yyyy')} (${inXdays})`;
  const time = `${format(eventDate, 'hh:mm')}H`;
  return (
    <>
      <Text {...restProps} variant="body2" text={date} />
      <Text {...restProps} variant="body2" text={time} />
    </>
  );
};

export default React.memo(FixtureDate);
