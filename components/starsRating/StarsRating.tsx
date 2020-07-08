import React from 'react';
import IconStar from '../../Icons/IconStar';
import IconHalfStar from '../../Icons/IconHalfStar';

interface Props {
  rating: number;
}

const getNumberOfStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }
  return stars;
};

const shouldHaveHalfStar = (rating: number) => `${rating}`.includes('.5');

const StarsRating: React.FC<Props> = ({ rating }: Props) => (
  <span>
    {getNumberOfStars(rating).map((key) => (
      <IconStar key={key} />
    ))}
    {shouldHaveHalfStar(rating) && <IconHalfStar />}
  </span>
);

export default React.memo(StarsRating);
