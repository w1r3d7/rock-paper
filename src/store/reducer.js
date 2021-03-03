
const initialState = {
  chosenSign: null,
  score: 0,
  isSoundEnabled: true,
  userName: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIGN':
      return {
        ...state,
        chosenSign: action.payload
      };
    case 'INCREASE_SCORE':
      return {
        ...state,
        score: state.score + 1
      };
    case 'DECREASE_SCORE':
      return {
        ...state,
        score: state.score - 1
      };
    case 'CHANGE_SOUND_STATE':
      return {
        ...state,
        isSoundEnabled: !state.isSoundEnabled
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
