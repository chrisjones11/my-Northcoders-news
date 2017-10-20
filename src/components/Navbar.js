import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div >
        <h1 className='title is-1'>NC News</h1>
        <button> 
          <span className="icon">
            <Link to='/'><a><i className="fa fa-home"></i></a></Link>
            
          </span>
        </button>
        <Link to='/football'><a>Football</a>|</Link>
        <Link to='/cooking'><a>Cooking</a>|</Link>
        <a>Coding</a>
      </div>
    );
  }
}

export default Navbar;
