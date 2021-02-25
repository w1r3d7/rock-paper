import React, {useState} from 'react';
import useSound from 'use-sound';
import {SignType} from '../../constants';
import Sign from '../sign';
import Icon from '../icon';
import bazinga from './bazinga.swf.mp3';


const SignsList = () => {
  const [selectedSign, setSelectedSign] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const chooseSignMessage = <p className="self-center justify-self-center">Choose your sign!</p>;
  const createPersonSign = () => <div className="sign"><Icon name={selectedSign}/></div>;
  const userSign = selectedSign ? createPersonSign() : chooseSignMessage;

  const [play] = useSound(bazinga);

  const handleSignClick = (name) => {
    setSelectedSign(name);
    setDisabled(true);
    play();
  };

  return (
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-1 col-end-6 mx-auto">
            <Sign name={SignType.LIZARD}
                  onSignClick={handleSignClick}
                  isDisabled={disabled} />
        </div>
        <div className="grid grid-cols-3 col-start-2 col-end-5">
          <Sign name={SignType.SCISSORS}
                onSignClick={handleSignClick}
                isDisabled={disabled} />
          {userSign}
          <Sign name={SignType.ROCK}
                onSignClick={handleSignClick}
                isDisabled={disabled} />
        </div>
        <div className="grid grid-cols-2 col-start-2 col-end-5">
          <Sign name={SignType.PAPER}
                onSignClick={handleSignClick}
                isDisabled={disabled} />
          <Sign name={SignType.SPOCK}
                onSignClick={handleSignClick}
                isDisabled={disabled} />
        </div>
      </div>
  );
};

export default SignsList;
