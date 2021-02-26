import React from 'react';
import Button from '../button';

const MainPage = () => (
  <div className="flex m-auto flex-col space-y-5">
    <Button url="game" name="Start Game" />
    <Button url="rules" name="Read Rules" />
    <Button url="records" name="Top Players" />
  </div>

);

export default MainPage;
