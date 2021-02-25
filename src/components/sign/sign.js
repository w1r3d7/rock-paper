import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const Sign = ({name, onSignClick, isDisabled}) => (
    <button
    disabled={isDisabled}
    onClick={() => onSignClick(name)}
        className="sign"
        type="button">
      <Icon customClasses="text-3xl" name={name} />
    </button>
);



Sign.propTypes = {
  name: PropTypes.string.isRequired,
  onSignClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default Sign;
