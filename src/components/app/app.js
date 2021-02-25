import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import {GamePage, MainPage, RulesPage} from '../pages';
import Header from '../header';

const App = () => (
    <div className="flex flex-col h-screen">
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/game' component={GamePage} />
        <Route path='/rules' component={RulesPage} />
        <Route>
          <div className="flex m-auto">
            <Link className="border-red-500 border-2 p-5 rounded-full" to="/">Error 404, back to Main page</Link>
          </div>
        </Route>
      </Switch>
    </div>
);

export default App;
