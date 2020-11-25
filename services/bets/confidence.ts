import { FixtureInfo } from '../../types';

const CONFIDENCE_MARGIN_PERCENTAGE = 0.15;

const getConfindenceMargin = ({ bet }: FixtureInfo): number => {
  const { homeTeam, awayTeam } = bet;

  if (homeTeam.points > awayTeam.points) {
    return homeTeam.points * CONFIDENCE_MARGIN_PERCENTAGE;
  }
  return awayTeam.points * CONFIDENCE_MARGIN_PERCENTAGE;
};

export { getConfindenceMargin };
