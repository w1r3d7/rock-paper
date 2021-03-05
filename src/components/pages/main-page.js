import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ButtonLink from '../button';
import UserNameForm from '../user-name-form';
import SubmitScore from '../submit-score';


const MainPage = ({userName}) => {
  const buttons = () => (
      <>
        <ButtonLink url="game" name="Start Game" />
        <ButtonLink url="rules" name="Read Rules" />
        <ButtonLink url="records" name="Leaderboard" />
        <SubmitScore />
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
