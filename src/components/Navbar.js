import React from 'react';
import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav id = 'nav' className="row">
          <div className="col-5">
            <a className="logo" href="#!">Northcoders</a>
          </div>
          <div className="col">
            <a className="home" href="#!"><i className="fa fa-home"></i></a>
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
