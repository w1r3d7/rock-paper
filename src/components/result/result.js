import React from 'react';
import PropTypes from 'prop-types';
import {GameResultType, Url} from '../../constants';
import loserImg from './loser.jpg';
import smileImg from './smile.jpg';
import sadImg from './sad.jpg';
import Button from '../button';



const Result = ({result}) => {
  let imgSrc;
  switch (result) {
    case GameResultType.WIN:
      imgSrc = loserImg;
      break;
    case GameResultType.DRAW:
      imgSrc = smileImg;
      break;
    default:
      imgSrc = sadImg;
  }

  return (
      <div className="flex flex-col items-center">
        <span className="mb-5">{result}</span>
        <img className="w-36 h-36 rounded-full mb-5" src={imgSrc} alt={`You ${result}`} />
        <Button url={Url.GAME} name="Play Again" />
      </div>
  );
};


Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
