import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div >
        <h1 className='title is-1'>NC News</h1>
        <button> 
          <span className="icon">
            <Link to='/'><i className="fa fa-home"></i></Link>
            
          </span>
        </button>
        <Link to='/football'>Football|</Link>
        <Link to='/cooking'>Cooking|</Link>
        <a>Coding</a>
      </div>
    );
  }
}

export default Navbar;
