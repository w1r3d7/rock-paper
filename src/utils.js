import {GameResultType, SignType} from './constants';

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
        return GameResultType.DRAW;
      }
      if (ai === SignType.ROCK || ai === SignType.SCISSORS) {
        return GameResultType.WIN;
      }
      return GameResultType.LOSE;

    case SignType.LIZARD:
      if (ai === SignType.LIZARD) {
        return GameResultType.DRAW;
      }
      if (ai === SignType.SPOCK || ai === SignType.PAPER) {
        return GameResultType.WIN;
      }
      return GameResultType.LOSE;

    case SignType.ROCK:
      if (ai === SignType.ROCK) {
        return GameResultType.DRAW;
      }
      if (ai === SignType.LIZARD || ai === SignType.SCISSORS) {
        return GameResultType.WIN;
      }
      return GameResultType.LOSE;

    case SignType.PAPER:
      if (ai === SignType.PAPER) {
        return GameResultType.DRAW;
      }
      if (ai === SignType.ROCK || ai === SignType.SPOCK) {
        return GameResultType.WIN;
      }
      return GameResultType.LOSE;

    case SignType.SCISSORS:
      if (ai === SignType.SCISSORS) {
        return GameResultType.DRAW;
      }
      if (ai === SignType.PAPER || ai === SignType.LIZARD) {
        return GameResultType.WIN;
      }
      return GameResultType.LOSE;

    default:
      return GameResultType.DRAW;
  }
};

export {firstLetterUpperCase, getRandomElement, getResult};
