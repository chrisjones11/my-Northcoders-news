import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "container-inline">
        {this.props.list.map((item)=>{
   
          return (
            <div key = {item._id} id = 'articleCards' className="row">
          
              <div className = "icons col-2">
                <div className = "votes text-center">
                  <div className="inlineicons">
                    <i className = "fa fa-arrow-up"></i>
                    <i className = "fa fa-arrow-down"></i>
                  </div>
                  <div className="inlineicons">
                    <h6>10</h6>
                  </div>
                </div>
              </div>
              <div className = "icons col-10">
                <Link to = {`/article/${item._id}`} ><h4 className="card-title"> {item.title} </h4></Link>
                <p id = "card-text" className="card-text"> Created by 
                  <a href="#!" id = "card-link" className="card-link">{item.created_by}</a>
                    in <Link to={`/${item.belongs_to}`} id= "card-link" className="card-link">{item.belongs_to}</Link>
                </p>
              </div>
              
            </div>
          );
        })}
     
      </div>
    );
  }
}

List.propTypes = {
  list: PT.array.isRequired
};

export default List;