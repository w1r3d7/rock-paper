import {GameResult, SignType} from './constants';

const firstLetterUpperCase = (string) => {
  const firstLetter = string[0].toUpperCase();
  return `${firstLetter}${string.slice(1)}`;
};

const getRandomElement = (list) => {
  const listLength = list.length;
  const randomElement = Math.floor(Math.random() * listLength);
  return list[randomElement];
};

const getResult = (person, ai) => {
  switch (person) {
    case SignType.SPOCK:
      if (ai === SignType.SPOCK) {
        return GameResult.DRAW;
      }
      if (ai === SignType.ROCK || ai === SignType.SCISSORS) {
        return GameResult.WIN;
      }
      return GameResult.LOSE;

    case SignType.LIZARD:
      if (ai === SignType.LIZARD) {
        return GameResult.DRAW;
      }
      if (ai === SignType.SPOCK || ai === SignType.PAPER) {
        return GameResult.WIN;
      }
      return GameResult.LOSE;

    case SignType.ROCK:
      if (ai === SignType.ROCK) {
        return GameResult.DRAW;
      }
      if (ai === SignType.LIZARD || ai === SignType.SCISSORS) {
        return GameResult.WIN;
      }
      return GameResult.LOSE;

    case SignType.PAPER:
      if (ai === SignType.PAPER) {
        return GameResult.DRAW;
      }
      if (ai === SignType.ROCK || ai === SignType.SPOCK) {
        return GameResult.WIN;
      }
      return GameResult.LOSE;

    case SignType.SCISSORS:
      if (ai === SignType.SCISSORS) {
        return GameResult.DRAW;
      }
      if (ai === SignType.PAPER || ai === SignType.LIZARD) {
        return GameResult.WIN;
      }
      return GameResult.LOSE;

    default:
      return GameResult.DRAW;
  }
};

export {firstLetterUpperCase, getRandomElement, getResult};
