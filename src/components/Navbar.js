import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  render() {
    return (
      <div >
        <nav  >
          <div >
            <Link  to="/">Northcfffoders</Link>
          </div>
          <div >
            <Link  to='/football'>Football</Link>
          </div>
          <div >
            <Link  to='/cooking'>Cooking</Link>
          </div>
          <div >
            <Link  to='/coding'>Coding</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
