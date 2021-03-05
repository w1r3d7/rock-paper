import React, {useState} from 'react';
import {connect} from 'react-redux';

import {API_URL} from '../../constants';


const SubmitScore = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setError(false);
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(props)
    }).then(() => setLoading(false))
      .catch(() => setError(true));
  };

  const isLoading = loading ? 'Loading... ': 'Submit your score';
  const buttonText = error ? 'Error, try later' : isLoading;

  return (
      <button
          onClick={handleButtonClick}
          className="btn"
          disabled={loading}
          type="button">
        {buttonText}
      </button>
  );
};

const mapStateToProps = ({userName, score}) => ({userName, score});

export default connect(mapStateToProps)(SubmitScore);
