import React from 'react';
import PT from 'prop-types';


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
                <h4 className="card-title"> {item.title} </h4>
                <p id = "card-text" className="card-text"> Created by 
                  <a href="#!" id = "card-link" className="card-link">{item.created_by}</a>
                    in <a href="#!" id= "card-link" className="card-link">{item.belongs_to}</a>
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