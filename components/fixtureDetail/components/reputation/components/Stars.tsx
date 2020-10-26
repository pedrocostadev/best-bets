import React from 'react';
import IconStar from '../../../../../Icons/IconStar';
import IconHalfStar from '../../../../../Icons/IconHalfStar';

interface Props {
  stars: number;
}

const getNumberOfStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }
  return stars;
};

const shouldHaveHalfStar = (rating: number) => `${rating}`.includes('.5');

const Stars: React.FC<Props> = ({ stars }: Props) => (
  <span>
    {getNumberOfStars(stars).map((key) => (
      <IconStar key={key} />
    ))}
    {shouldHaveHalfStar(stars) && <IconHalfStar />}
  </span>
);

export default React.memo(Stars);
