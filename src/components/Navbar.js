import React from 'react';
// import {Link} from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav id = 'nav' className="navbar navbar-dark bg-dark">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className="nav-link " href="#!">Northcoders</a>
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

export default Navbar;
