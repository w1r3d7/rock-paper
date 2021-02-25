import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({url, name}) => (
    <Link
        to={url}
        className="
        m-auto flex-initial text-purple-600
        my-auto px-5 py-1 border border-purple-200
        hover:bg-purple-700 hover:text-purple-100
        focus:bg-purple-700 focus:text-purple-100
        focus:outline-none
        rounded-full"
        type="button">{name}</Link>
);

Button.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
