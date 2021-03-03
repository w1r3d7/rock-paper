import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator';
import {API_URL} from '../../constants';

const Record = ({item}) => (
  <tr>
    <td className="border-2 border-purple-200 text-center">{item.name}</td>
    <td className="border-2 border-purple-200 text-center">{item.result}</td>
  </tr>
);

Record.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
  }).isRequired
};

const Records = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((responseData) => {
          if(responseData) {
            setData(Object.values(responseData));
          }
        })
        .catch(() => setError(true));
  }, []);

  if (data.length === 0) {
    return (
        <h2 className="text-center">No records yet!</h2>
    );
  }

  if (error) {
    return <ErrorIndicator />;
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
          data.map((item) => <Record item={item} />)
        }
        </tbody>
      </table>
  );
};

export default Records;
