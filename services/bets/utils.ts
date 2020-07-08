const normalize = (x: number, xMin: number, xMax: number): number =>
  round((x - xMin) / (xMax - xMin));

const round = (num: number): number =>
  Math.round(num * 1000 + Number.EPSILON) / 1000;

export { normalize, round };
