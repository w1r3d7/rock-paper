import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import useSound from 'use-sound';

import Icon from '../icon';
import sprite from './sprite.mp3';



const Sign = ({name, onSignClick, isSoundEnabled}) => {
  const [play] = useSound(sprite, {soundEnabled: isSoundEnabled, sprite: {
      lizard: [0, 400],
      paper: [400, 350],
      rock: [750, 250],
      scissors: [1000, 510],
      spock: [1510, 460]
    }});

  const handleMouserEnterSign = () => {
    play({id: name});
  };

  return (
      <button
          onClick={() => onSignClick(name)}
          onMouseEnter={handleMouserEnterSign}
          className="sign"
          type="button">
        <Icon name={name} />
      </button>
  );
};



Sign.propTypes = {
  name: PropTypes.string.isRequired,
  onSignClick: PropTypes.func.isRequired,
  isSoundEnabled: PropTypes.bool.isRequired
};

const mapStateToProps = ({isSoundEnabled}) => ({isSoundEnabled});

export default connect(mapStateToProps)(Sign);
