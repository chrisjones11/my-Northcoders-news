import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div  className = 'columns'>
        <div  className='column'>
          <h1 className='title is-1' >NC News</h1>
        </div>
        <div className='column'>
          <button  > 
            <span className="icon" >
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
