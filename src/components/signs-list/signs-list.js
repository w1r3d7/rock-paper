import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {SignType, Url} from '../../constants';
import Sign from '../sign';
import {setSign} from '../../store/actions';


const SignsList = ({setSignAction}) => {
  const chooseSignMessage = <p className="self-center justify-self-center">Choose your sign!</p>;
  const history = useHistory();

  const handleSignClick = (name) => {
    setSignAction(name);
    history.push(Url.GAME_RESULT);
  };

  return (
      <div className="grid grid-cols-5 grid-rows-3 gap-4">
        <div className="col-start-1 col-end-6 mx-auto">
            <Sign name={SignType.LIZARD}
                  onSignClick={handleSignClick} />
        </div>
        <div
            className="grid grid-cols-3
        xl:col-start-2 xl:col-end-5
        col-start-1 col-end-6
        ">
          <Sign name={SignType.SCISSORS}
                onSignClick={handleSignClick} />
          {chooseSignMessage}
          <Sign name={SignType.ROCK}
                onSignClick={handleSignClick} />
        </div>
        <div
            className="grid grid-cols-2
            xl:col-start-2 xl:col-end-5
            col-start-1 col-end-6
            ">
          <Sign name={SignType.PAPER}
                onSignClick={handleSignClick} />
          <Sign name={SignType.SPOCK}
                onSignClick={handleSignClick} />
        </div>
      </div>
  );
};

SignsList.propTypes = {
  setSignAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSignAction: (sign) => dispatch(setSign(sign))
});

export default connect(null, mapDispatchToProps)(SignsList);
