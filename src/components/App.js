import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import Navbar from './Navbar';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
          <Navbar />
      
        </section>
      </BrowserRouter>
      
    );
  }
}

export default App;
