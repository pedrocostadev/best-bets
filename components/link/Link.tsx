import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
  name: string;
  path: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ name, path, className }: LinkProps) => (
  <NextLink href={path}>
    <a className={className}>{name}</a>
  </NextLink>
);

export default Link;
