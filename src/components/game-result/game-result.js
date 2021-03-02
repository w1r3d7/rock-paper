import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import useSound from 'use-sound';

import PersonSign from '../person-sign';
import {AI_COUNTER, SignType} from '../../constants';
import {getRandomElement, getResult} from '../../utils';
import {changeScore} from '../../store/actions';
import Result from '../result';
import drumRoll from './Drum Roll - Gaming Sound Effect (HD).mp3';


const GameResult = ({chosenSign, changeScoreAction, isSoundEnabled}) => {
  const [aiSign, setAiSign] = useState(SignType.LIZARD);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(null);
  const [play] = useSound(drumRoll, {soundEnabled: isSoundEnabled});

  useEffect(() => play(), [play]);

  useEffect(() => {
    let timeout;

    if (counter < AI_COUNTER) {
      timeout = setTimeout(() => {
        const randomElement = getRandomElement(Object.values(SignType));
        setAiSign(randomElement);
        setCounter((prevState) => prevState + 1);
      }, 200);
    } else {
      const gameResult = getResult(chosenSign, aiSign);
      changeScoreAction(gameResult);
      setResult(gameResult);
    }
    return () => clearTimeout(timeout);
  }, [counter, changeScoreAction, aiSign, chosenSign]);

  if (!chosenSign) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex items-center m-auto w-3/4 justify-between">
      <div className="flex flex-col items-center">
        <span className="mb-3">You chose {chosenSign}</span>
        <PersonSign selectedSign={chosenSign}/>
      </div>

      {result ? <Result result={result} /> : null}
      <div className="flex flex-col items-center">
        <span className="mb-3">AI chose {aiSign}</span>
        <PersonSign selectedSign={aiSign} />
      </div>
    </div>
  );
};

GameResult.propTypes = {
  chosenSign: PropTypes.string.isRequired,
  changeScoreAction: PropTypes.func.isRequired,
  isSoundEnabled: PropTypes.bool.isRequired
};

const mapStateToProps = ({chosenSign, isSoundEnabled}) => ({chosenSign, isSoundEnabled});
const mapDispatchToProps = (dispatch) => ({
  changeScoreAction: (result) => changeScore(result, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(GameResult);
