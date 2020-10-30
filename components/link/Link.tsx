import React from 'react';
import NextLink from 'next/link';

import Text from '../text/Text';

export interface LinkProps {
  name: string;
  path: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ name, path, className }: LinkProps) => (
  <NextLink href={path}>
    <a className={className}>
      <Text variant="body1" text={name} />
    </a>
  </NextLink>
);

export default Link;
