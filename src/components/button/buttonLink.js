import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({url, name}) => (
    <Link
        to={url}
        className="btn"
        type="button">{name}</Link>
);

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonLink;
