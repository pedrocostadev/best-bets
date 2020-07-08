import * as React from 'react';

interface Props {
  className?: string;
}

const IconBurguer: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 80"
    width="40"
    height="40"
    fill="#ef8729"
  >
    <rect width="100" height="20"></rect>
    <rect y="30" width="100" height="20"></rect>
    <rect y="60" width="100" height="20"></rect>
  </svg>
);

export default IconBurguer;
