import React from 'react';
import NextLink from 'next/link';

import Text from '@/components/text/Text';

export interface LinkProps {
  name: string;
  path: string;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({
  name,
  path,
  className,
  onClick = () => undefined,
}: LinkProps) => (
  <NextLink href={path}>
    <a className={className} onClick={onClick}>
      <Text variant="body1" text={name} />
    </a>
  </NextLink>
);

export default Link;
