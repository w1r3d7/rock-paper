import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FaSpinner} from 'react-icons/all';

import ErrorIndicator from '../error-indicator';
import {API_URL} from '../../constants';
import {normalizeLeaderboard} from '../../utils';


const Record = ({item}) => (
  <tr>
    <td className="border-2 border-purple-200 text-center">{item.userName}</td>
    <td className="border-2 border-purple-200 text-center">{item.score}</td>
  </tr>
);

Record.propTypes = {
  item: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired
};

const Records = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
        .then((res) => res.json())
        .then((responseData) => {
          setLoading(false);
          if(responseData) {
            setData(Object.entries(responseData));
          } else {
            setError(true);
          }
        })
        .catch(() => setError(true));
  }, []);

  if (data.length === 0 && !loading) {
    return (
        <h2 className="text-center">No records yet!</h2>
    );
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return (
        <div className="m-auto animate-spin">
          <FaSpinner size={120} />
        </div>);
  }

  return (
      <table className="table-auto w-2/6 mx-auto">
        <thead>
        <tr>
          <th className="border-2 border-purple-500">Name</th>
          <th className="border-2 border-purple-500">Result</th>
        </tr>
        </thead>
        <tbody>
        {
          normalizeLeaderboard(data).map(([id, item]) => <Record item={item} key={id} />)
        }
        </tbody>
      </table>
  );
};

export default Records;
