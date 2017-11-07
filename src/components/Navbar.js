import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav id='nav' className="row">
          <div className="col-5">
            <Link className="logo" to="/">Northcoders</Link>
          </div>
          <div className="col">
            <Link className="home" to='/'><i className="fa fa-home"></i></Link>
          </div>
          <div className="col-1">
            <Link className="topics" to='/football'>Football</Link>
          </div>
          <div className="col-1">
            <Link className="topics" to='/cooking'>Cooking</Link>
          </div>
          <div className="col-1">
            <Link className="topics" to='/coding'>Coding</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
