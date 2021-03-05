import {GameResultType} from '../constants';

const setSign = (sign) => ({
  type: 'SET_SIGN',
  payload: sign
});

const setUserName = (name) => ({
  type: 'SET_USER_NAME',
  payload: name
});

const changeSoundState = () => ({
  type: 'CHANGE_SOUND_STATE'
});

const increaseScore = () => ({
  type: 'INCREASE_SCORE'
});

const decreaseScore = () => ({
  type: 'DECREASE_SCORE'
});

const changeScore = (result, dispatch) => {
  if (result === GameResultType.WIN) {
    dispatch(increaseScore());
  }

  if (result === GameResultType.LOSE) {
    dispatch(decreaseScore());
  }
};


export {
  setSign,
  changeScore,
  changeSoundState,
  setUserName
};
