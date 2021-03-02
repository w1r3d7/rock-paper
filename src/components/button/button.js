import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({url, name}) => (
    <Link
        to={url}
        className="btn"
        type="button">{name}</Link>
);

Button.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
