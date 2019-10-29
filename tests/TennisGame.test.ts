import { Match } from '../src/match';
import { checkAllScores } from './TestUtils';


describe('TennisGame', function () {
  describe('TennisGame1', function () {
    it('should correctly check all the scores for set 1', function () {
      checkAllScores(() => new Match('player1', 'player2'));
    });
  });
});
