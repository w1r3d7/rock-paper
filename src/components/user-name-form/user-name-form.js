import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setUserName} from '../../store/actions';


const UserNameForm = ({setUserNameAction}) => {
  const [user, setUser] = useState('');
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setUserNameAction(user);
  };

  const handleUserNameInputChange = ({target: {value}}) => {
    setUser(value);
  };

  return (
      <form
          onSubmit={handleFormSubmit}
          className="flex flex-col h-36">
        <label className="flex flex-col items-center" htmlFor="username">
          Enter your name
          <input
              className="mt-5"
              id="username"
              type="text"
              name="username"
              placeholder="Enter your name here"
              value={user}
              onChange={handleUserNameInputChange}
              required />
        </label>
        <button className="btn" type="submit">Set User name</button>
      </form>
  );
};

UserNameForm.propTypes = {
  setUserNameAction: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setUserNameAction: (name) => dispatch(setUserName(name))
});

export default connect(null, mapDispatchToProps)(UserNameForm);
