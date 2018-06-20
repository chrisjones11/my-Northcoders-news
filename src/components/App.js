import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Articles from './Articles';
import ArticleComments from './ArticleComments';
// import ArticleComments from './ArticleComments';
// import Navbar from './Navbar';
import NoMatch from './NoMatch';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
  
          

          <Switch>
            <Route exact path='/' component={Articles} />
            <Route path= '/football' component={Articles} />
            <Route path= '/cooking' component={Articles} />
            <Route path= '/coding' component={Articles} />
            
            <Route path= '/article/:id' component={ArticleComments} />
           
            {/* <Route path='/articles'>
              <Route path='/comments' component={ArticleComments} />
            </Route> */}

            <Route component={NoMatch} />
          </Switch>

        </section>
      </BrowserRouter>
      
    );
  }
}

export default (App);
