import * as React from 'react';

interface Props {
  className?: string;
}

const IconHalfStar: React.FC<Props> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 32 27">
    <g>
      <polygon
        fill="#a4a4a4"
        points="32,12.118 20.389,10.918 16.026,0.6 16,0.66 16,25.325 16.021,25.312 25.914,31.4 23.266,19.867"
      />
      <polygon
        fill="#fbc410"
        points="11.547,10.918 0,12.118 8.822,19.867 6.127,31.4 16,25.325 16,0.66 	"
      />
    </g>
  </svg>
);

export default IconHalfStar;
