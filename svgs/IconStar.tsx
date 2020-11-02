import * as React from 'react';

interface Props {
  className?: string;
}

const IconStar: React.FC<Props> = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 20">
    <path
      fill="#fbc410"
      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
    />
  </svg>
);

export default IconStar;
