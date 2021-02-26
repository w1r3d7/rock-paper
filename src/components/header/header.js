import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '../button';



const Header = ({score}) => (
    <header className="mt-5">
      <div className="flex flex-col">
        <Button url="/" name="Home Page" />
        <span className="mx-auto mt-5">Your score: {score}</span>
      </div>

      <h1 className="text-2xl font-bold text-center mt-5 mb-5">Rock, Paper, Scissors, Lizard and Spock!</h1>
    </header>
);

Header.propTypes = {
  score: PropTypes.number.isRequired
};

const mapStateToProps = ({score}) => ({score});

export default connect(mapStateToProps)(Header);
