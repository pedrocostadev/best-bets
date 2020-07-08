import * as React from 'react';

interface Props {
  className?: string;
}

const IconChevron: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 8 5"
    width="22px"
    height="22px"
    stroke="currentColor"
    fill="none"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1 1 3.77984472 4 6.53846154 1" />
  </svg>
);

export default IconChevron;
