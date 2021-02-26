import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import useSound from 'use-sound';

import PersonSign from '../person-sign';
import {AI_COUNTER, SignType, Url} from '../../constants';
import {getRandomElement, getResult} from '../../utils';
import Button from '../button';
import {changeScore} from '../../store/actions';

import bazinga from './bazinga.swf.mp3';


const PlayAgain = ({result}) => (
    <div className="flex flex-col items-center">
      <span>{result}</span>
      <Button url={Url.GAME} name="Play Again" />
    </div>
);

PlayAgain.propTypes = {
  result: PropTypes.string.isRequired,
};

const GameResult = ({chosenSign, changeScoreAction}) => {
  const [aiSign, setAiSign] = useState(SignType.LIZARD);
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(null);
  const [play] = useSound(bazinga);

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
      play();
    }
    return () => clearTimeout(timeout);
  }, [counter, changeScoreAction, play, aiSign, chosenSign]);

  if (!chosenSign) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex items-center">
      <PersonSign selectedSign={chosenSign}/>
      {result ? <PlayAgain result={result} /> : null}
      <PersonSign selectedSign={aiSign} />
    </div>
  );
};

GameResult.propTypes = {
  chosenSign: PropTypes.string.isRequired,
  changeScoreAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({chosenSign}) => ({chosenSign});
const mapDispatchToProps = (dispatch) => ({
  changeScoreAction: (result) => changeScore(result, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(GameResult);
