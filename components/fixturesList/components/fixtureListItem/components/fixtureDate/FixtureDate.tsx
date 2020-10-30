import React from 'react';
import { format, formatDistance } from 'date-fns';

import Text from '@/components/text/Text';

import { FixtureWithBets } from '../../../../../../types';

interface Props {
  fixture: FixtureWithBets;
}

const FixtureDate: React.FC<Props> = ({ fixture }: Props) => {
  const eventDate = new Date(fixture.eventDate);
  const inXdays = formatDistance(eventDate, new Date());
  const date = `${format(eventDate, 'd/MM/yyyy')} (${inXdays})`;
  const time = `${format(eventDate, 'hh:mm')}H`;
  return (
    <>
      <Text variant="body2" text={date} />
      <Text variant="body2" text={time} />
    </>
  );
};

export default React.memo(FixtureDate);
