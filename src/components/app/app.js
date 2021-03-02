import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NotFound from '../not-found';
import {GamePage, GameResultPage, MainPage, RulesPage} from '../pages';
import Header from '../header';
import {Url} from '../../constants';
import Footer from '../footer';



const App = () => (
  <div className="flex flex-col h-screen justify-between">
    <Header />
    <Switch>
      <Route path={Url.HOME} exact component={MainPage} />
      <Route path={Url.GAME} component={GamePage} />
      <Route path={Url.RULES} component={RulesPage} />
      <Route path={Url.GAME_RESULT} component={GameResultPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);


export default App;
