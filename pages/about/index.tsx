import React from 'react';

import Text from '@/components/text/Text';

const About: React.FC = () => (
  <>
    <Text
      variant="body1"
      text="BestBets is not responsible for your bets. The recommended bet is based on
      real data but can obviously fail."
    />

    <Text
      variant="body1"
      text="For now we only support Premier League games."
    />
    <Text variant="body1" bold textAlignCenter text="Play responsibly." />
  </>
);

export default About;
