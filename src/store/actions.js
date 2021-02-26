import {GameResult} from '../constants';

const setSign = (sign) => ({
  type: 'SET_SIGN',
  payload: sign
});

const increaseScore = () => ({
  type: 'INCREASE_SCORE'
});

const decreaseScore = () => ({
  type: 'DECREASE_SCORE'
});

const changeScore = (result, dispatch) => {
  if (result === GameResult.WIN) {
    dispatch(increaseScore());
  }

  if (result === GameResult.LOSE) {
    dispatch(decreaseScore());
  }
};


export {
  setSign,
  changeScore
};
