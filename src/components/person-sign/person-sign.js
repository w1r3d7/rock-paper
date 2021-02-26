import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';


const PersonSign = ({selectedSign}) => (
  <div className="sign">
    <Icon name={selectedSign}/>
  </div>
);

PersonSign.propTypes = {
  selectedSign: PropTypes.string.isRequired
};

export default PersonSign;
