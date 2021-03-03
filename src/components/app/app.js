import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NotFound from '../not-found';
import {MainPage} from '../pages';
import Header from '../header';
import {Url} from '../../constants';
import Footer from '../footer';
import SignsList from '../signs-list/signs-list';
import GameRules from '../game-rules';
import GameResult from '../game-result/game-result';
import Records from '../records';

const App = () => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <Switch>
      <Route path={Url.HOME} exact component={MainPage} />
      <Route path={Url.GAME} component={SignsList} />
      <Route path={Url.RULES} component={GameRules} />
      <Route path={Url.GAME_RESULT} component={GameResult} />
      <Route path={Url.RECORDS} component={Records} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);


export default App;
