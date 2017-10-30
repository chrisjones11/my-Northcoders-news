import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cooking from './Cooking';

import HomePage from './HomePage';
import Navbar from './Navbar';
import NoMatch from './NoMatch';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
  
          <Navbar />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path= '/football' component={HomePage} />
            <Route path= '/cooking' component={Cooking} />
            <Route component={NoMatch} />
          </Switch>

        </section>
      </BrowserRouter>
      
    );
  }
}

export default App;
