import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Articles from './Articles';
import ArticleById from './ArticleById';
import ArticleComments from './ArticleComments';
import Navbar from './Navbar';
import NoMatch from './NoMatch';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
  
          <Navbar />

          <Switch>
            <Route exact path='/' component={Articles} />
            <Route path= '/football' component={Articles} />
            <Route path= '/cooking' component={Articles} />
            <Route path= '/coding' component={Articles} />
            
            <Route path= '/article/:id' component={ArticleById} />
           
            <Route path='/articles'>
              <Route path='/comments' component={ArticleComments} />
            </Route>

            <Route component={NoMatch} />
          </Switch>

        </section>
      </BrowserRouter>
      
    );
  }
}

export default (App);
