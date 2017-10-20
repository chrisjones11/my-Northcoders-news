import React from 'react';


class Navbar extends React.Component {
  render() {
    return (
      <div >
        <h1 className='title is-1'>NC News</h1>
        <button> 
          <span className="icon">
            <i className="fa fa-home"></i>
          </span>
        </button>
        <a>Football</a>|
        <a>Cooking</a>|
        <a>Coding</a>
      </div>
    );
  }
}

export default Navbar;