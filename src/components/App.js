import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
          <Navbar /> 
          
          <Switch>
            <Route exact path='/' component={HomePage} />
           
          </Switch>


        </section>
      </BrowserRouter>
      
    );
  }
}

export default App;
