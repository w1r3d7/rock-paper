import React from 'react';
import rules from './RPSLS.png';
import Button from '../button';

const RulesPage = () => (
    <div className="m-auto justify-center flex flex-col">
      <img src={rules} alt="game rules" />
      <Button url="/" name="Home" />
    </div>
);

export default RulesPage;
