import { round, normalize } from './utils';
import { VICTORY_POINTS } from './weights';

describe('Utils', () => {
  describe('round', () => {
    test('should return the right rounded value', () => {
      expect(round(0.123456)).toBe(0.123);
      expect(round(0.1211)).toBe(0.121);
      expect(round(0.0005)).toBe(0.001);
      expect(round(1.0)).toBe(1);
      expect(round(0.8999)).toBe(0.9);
      expect(round(0.3455)).toBe(0.346);
    });
  });
  describe('normalize', () => {
    test('should return the right normalized value', () => {
      const totalGames = 5;
      const maxPoints = totalGames * VICTORY_POINTS;
      const minPoints = 0;

      expect(normalize(15, minPoints, maxPoints)).toBe(1);
      expect(normalize(13, minPoints, maxPoints)).toBe(0.867);
      expect(normalize(10, minPoints, maxPoints)).toBe(0.667);
      expect(normalize(9, minPoints, maxPoints)).toBe(0.6);
      expect(normalize(4, minPoints, maxPoints)).toBe(0.267);
      expect(normalize(0, minPoints, maxPoints)).toBe(0);
    });
  });
});
