const SignType = {
    PAPER: 'paper',
    ROCK: 'rock',
    LIZARD: 'lizard',
    SPOCK: 'spock',
    SCISSORS: 'scissors'
};

const Url = {
    HOME: '/',
    GAME: '/game',
    RULES: '/rules',
    GAME_RESULT: '/game-result',
    RECORDS: '/records'
};

const API_URL = 'https://rock-paper-b93b9-default-rtdb.europe-west1.firebasedatabase.app/top.json';

const GameResultType = {
    WIN: 'Win',
    LOSE: 'Lose',
    DRAW: 'Draw',
};

const AI_COUNTER = 20;

export {SignType, Url, GameResultType, AI_COUNTER, API_URL};
