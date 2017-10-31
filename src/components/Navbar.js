import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div id= 'nav' className = 'columns'>
        <div id= 'nav' className='column'>
          <h1 className='title is-1' >NC News</h1>
        </div>
        <div id= 'nav' className='column'>
          <button  > 
            <span id= 'nav' className="icon" >
              <Link to='/'><i className="fa fa-home"></i></Link>
            
            </span>
      
          </button>   
        </div>
        <div className='column'>
          <Link to='/football'>Football|</Link>
          <Link to='/cooking'>Cooking|</Link>
          <Link to='/coding'>coding</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
