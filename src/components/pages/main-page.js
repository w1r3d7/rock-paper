import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../button';
import UserNameForm from '../user-name-form';


const MainPage = ({userName}) => {
  const buttons = () => (
      <>
        <Button url="game" name="Start Game" />
        <Button url="rules" name="Read Rules" />
        <Button url="records" name="Leaderboard" />
        <button className="btn" type="button">Send the result to the leaderboard</button>
      </>
  );
  return (
    <div className="flex m-auto flex-col space-y-5">
      {userName ? buttons() : <UserNameForm />}
    </div>
  );
};

MainPage.defaultProps = {
  userName: null
};

MainPage.propTypes = {
  userName: PropTypes.string
};

const mapStateToProps = ({userName}) => ({userName});

export default connect(mapStateToProps)(MainPage);
