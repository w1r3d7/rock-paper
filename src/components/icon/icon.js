import React from 'react';
import * as FontAwesome from 'react-icons/fa';
import PropTypes from 'prop-types';
import {firstLetterUpperCase} from '../../utils';


const Icon = ({name}) => {
  const iconName = `FaHand${firstLetterUpperCase(name)}`;
  const icon = React.createElement(FontAwesome[iconName]);
  return <span className="text-9xl text-black">{icon}</span>;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
