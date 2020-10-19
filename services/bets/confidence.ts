import { FixtureWithBets } from '../../types';

const CONFIDENCE_MARGIN_PERCENTAGE = 0.15;

const getConfindenceMargin = ({
  homeTeamPoints,
  awayTeamPoints,
}: FixtureWithBets): number => {
  if (homeTeamPoints > awayTeamPoints) {
    return homeTeamPoints * CONFIDENCE_MARGIN_PERCENTAGE;
  }
  return awayTeamPoints * CONFIDENCE_MARGIN_PERCENTAGE;
};

export { getConfindenceMargin };
