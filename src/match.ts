import { DiusTennis } from './diusTennis';


export class Match implements DiusTennis {
  private _score1: number = 0;
  private _score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  pointWonBy(playerName: string): void {
    if (playerName === 'player1')
      this._score1 += 1;
    else
      this._score2 += 1;
  }

  score(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this._score1 === this._score2) {
      switch (this._score1) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;

      }
    }
    else if (this._score1 >= 4 || this._score2 >= 4) {
      const minusResult: number = this._score1 - this._score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this._score1;
        else { score += '-'; tempScore = this._score2; }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }
}