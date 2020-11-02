import * as React from 'react';

interface Props {
  className?: string;
}

const IconClose: React.FC<Props> = ({ className }) => (
  <svg viewBox="0 0 40 40" width="30" height="30" className={className}>
    <path
      strokeLinecap="round"
      strokeWidth="3"
      fill="transparent"
      stroke="black"
      d="M 10,10 L 30,30 M 30,10 L 10,30"
    />
  </svg>
);

export default IconClose;
