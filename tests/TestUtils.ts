import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import { Match } from '../src/match';


let scores: Array<[number, number, string]> = [];


export function checkAllScores(tennisMatchGetter: () => Match) {
  getAllScores().forEach(([player1Score, player2Score, expectedScore]) => {
    checkScore(tennisMatchGetter(), player1Score, player2Score, expectedScore);
  });
}


export function checkScore(game: Match, player1Score: number, player2Score: number, expectedScore: string): void {
  const highestScore: number = Math.max(player1Score, player2Score);
  for (let i = 0; i < highestScore; i++) {
    if (i < player1Score) {
      game.pointWonBy('player1');
    }
    if (i < player2Score) {
      game.pointWonBy('player2');
    }
  }

  expect(game.score()).to.be.equals(expectedScore);
}


export function getAllScores(): Array<[number, number, string]> {
  if (!scores.length) {
    const scoreData = fs.readFileSync(path.resolve(__dirname, 'TesData.json')).toString();

    try {
      scores = JSON.parse(scoreData);
    } catch (err) {
      throw new Error(`There was an error parsing the data: "${err.message}"`);
    }
  }

  return JSON.parse(JSON.stringify(scores));
}
