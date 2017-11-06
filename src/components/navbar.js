import React from 'react';
// import {Link} from 'react-router-dom';


class navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link active" href="#!">Northcoders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!"><i className="fa fa-home"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Link</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}


class Navbar extends React.Component {
  render() {
    return (
      <div  className = 'columns'>
        <div  className='column'>
          <h1 >NC News</h1>
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
  

export default navbar;
