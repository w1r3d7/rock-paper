import React from 'react';
import Button from '../button';

const MainPage = () => (
  <div className="flex m-auto flex-col space-y-5">
    <Button url="game" name="Start Game" />
    <Button url="rules" name="Read Rules" />
  </div>

);

export default MainPage;
