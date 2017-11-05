import React from 'react';
import PT from 'prop-types';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <ul>
          {this.props.list.map((item)=>{
   
            return (
              <div key = {item._id} id = 'articleCards' className="card">
                <div className="card-body">
                  <h4 className="card-title"> {item.title} </h4>
                  <p className="card-text">Created by <a href="#!" className="card-link">{item.created_by}</a>in<a href="#!" className="card-link">{item.belongs_to}</a></p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  list: PT.array.isRequired
};

export default List;