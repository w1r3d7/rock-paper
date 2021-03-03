import React from 'react';
import useSound from 'use-sound';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FaPlay, FaStop, FaVolumeOff, FaVolumeUp} from 'react-icons/all';
import Button from '../button';

import tbbt from './tbbt.mp3';
import {changeSoundState} from '../../store/actions';

const Header = ({score, isSoundEnabled, changeSoundStateAction, userName}) => {
  const [play, { stop, isPlaying}] = useSound(tbbt, {loop: true});
  const handlePlayButtonClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  const musicButton = () => {
    const stopMusic = <><FaStop /> Stop Music</>;
    const playMusic = <><FaPlay /> Play Music</>;
    return <span className="flex items-center">{isPlaying ? stopMusic : playMusic}</span>;
  };

  const soundButton = () => {
    const disableSound = <><FaVolumeOff /> Disable Sound</>;
    const enableSound = <><FaVolumeUp /> Enable Sound</>;
    return <span className="flex items-center">{isSoundEnabled ? disableSound : enableSound}</span>;
  };


  return (
      <header className="m-5 flex flex-col">
        <h1 className="text-2xl font-bold text-center m-5">Rock, Paper, Scissors, Lizard and Spock!</h1>
        <div className="flex flex-col sm:flex-row items-center">
          <Button url="/" name="Home Page" />
          <button
              type="button"
              className="btn flex"
              onClick={handlePlayButtonClick}
              aria-label={isPlaying ? 'stop music' : 'play music'}
          >{musicButton()}</button>
          <button
              type="button"
              className="btn flex"
              onClick={changeSoundStateAction}
              aria-label={isSoundEnabled ? 'disable sound' : 'enable sound'}
          >{soundButton()}</button>
          <span className="mx-auto">{userName} score: {score}</span>
        </div>
      </header>
  );
};

Header.defaultProps = {
  userName: null
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
  isSoundEnabled: PropTypes.bool.isRequired,
  changeSoundStateAction: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

const mapStateToProps = ({score, isSoundEnabled, userName}) => ({score, isSoundEnabled, userName});

const mapDispatchToProps = (dispatch) => ({
  changeSoundStateAction: () => dispatch(changeSoundState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
