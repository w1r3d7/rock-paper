import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

const Sign = ({name, onSignClick}) => (
    <button
    onClick={() => onSignClick(name)}
        className="sign"
        type="button">
      <Icon name={name} />
    </button>
);



Sign.propTypes = {
  name: PropTypes.string.isRequired,
  onSignClick: PropTypes.func.isRequired,
};

export default Sign;
