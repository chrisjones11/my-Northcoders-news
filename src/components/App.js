import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import Navbar from './Navbar';
import List from './List';
import allArticles from '../../data/allArticles';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <section className='section'>
          <Navbar />
          <List articles= {allArticles}/>
         
      
        </section>
      </BrowserRouter>
      
    );
  }
}

export default App;
